import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client"; // Adicione o client
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Clock,
  BarChart,
  Users,
  BarChart3,
  BookOpen,
  LogOut,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";
import { simulations } from "@/data/simulations";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TypingAnimation } from "@/components/TypingAnimation";

const ITEMS_PER_PAGE = 6;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Verifica sessão atual
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.email) setUserEmail(user.email);
    });

    // Escuta mudanças (login/logout em outras abas)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUserEmail(null);
    toast({ title: "Desconectado", description: "Você saiu do sistema." });
  };
  // Lógica de Paginação
  const totalPages = Math.ceil(simulations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentSimulations = simulations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="EtiCCista Logo" className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-foreground">
              EtiCCista
            </h1>
          </div>
          <div className="flex gap-6 items-center">
            <div className="hidden md:flex gap-6 items-center">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/iob">Internet dos Corpos</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/datafem">Feminismo de Dados</Link>
              </Button>
            </div>
            <ThemeToggle />
            {userEmail ? (
              <>
                <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="truncate max-w-[150px]" title={userEmail}>
                    {userEmail}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </>
            ) : (
              <Button variant="ghost" asChild>
                <Link to="/auth">Login Institucional</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-institutional-light border-b border-border/50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-institutional-dark dark:text-white tracking-tight min-h-[120px] md:min-h-[140px] flex items-center justify-center">
            <TypingAnimation
              text="Decisões Técnicas, Consequências Reais."
              speed={100}
              delay={200}
              className="text-4xl md:text-6xl font-bold"
            />
          </h1>
          <p className="text-xl text-muted-foreground dark:text-white max-w-2xl mx-auto leading-relaxed">
            Uma plataforma interativa para estudantes de computação explorarem
            os dilemas éticos da Internet dos Corpos e do Feminismo de Dados.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full px-8"
              onClick={() =>
                document
                  .getElementById("catalogo")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explorar Cenários
            </Button>
            {userEmail ? (
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 bg-background"
                asChild
              >
                <Link to="/metadata">
                  <Users className="mr-2 h-4 w-4" /> Meu Perfil
                </Link>
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 bg-background"
                asChild
              >
                <Link to="/auth">Criar Conta</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Catálogo de Simulações */}
      <main id="catalogo" className="flex-1 container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            Catálogo de Simulações
          </h2>
          <span className="text-muted-foreground text-sm">
            {simulations.length} cenários disponíveis
          </span>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentSimulations.map((sim) => (
            <Card
              key={sim.id}
              className="group hover:shadow-lg transition-all duration-300 border-border/60 flex flex-col bg-muted/40 dark:bg-muted/60"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <sim.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="font-normal">
                    {sim.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">
                  {sim.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-base">
                  {sim.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {sim.estimatedTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart className="h-4 w-4" />
                    {sim.difficulty}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-2">
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <Link to={`/scenario?id=${sim.id}`}>Iniciar Simulação</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
        {/* Features */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              Funcionalidades da Plataforma
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">
                  Cenários Interativos
                </h4>
                <p className="text-muted-foreground">
                  Simule decisões técnicas em desenvolvimento de IoB através de
                  narrativas baseadas em casos reais, com feedback técnico
                  contextualizado.
                </p>
              </Card>

              <Card className="p-6">
                <Brain className="h-12 w-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Análise Ética</h4>
                <p className="text-muted-foreground">
                  Receba feedback imediato sobre implicações éticas de suas
                  escolhas, com referências a princípios de privacidade,
                  equidade e segurança.
                </p>
              </Card>

              <Card className="p-6">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">
                  Dados para Pesquisa
                </h4>
                <p className="text-muted-foreground">
                  Sistema coleta dados anonimizados para pesquisa acadêmica
                  sobre conscientização ética em estudantes de computação.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Research Context */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Contexto da Pesquisa
              </h3>
              <Card className="p-8">
                <p className="text-foreground mb-4">
                  Este simulador é parte de um Trabalho de Conclusão de Curso
                  (TCC) em Ciência da Computação que investiga a seguinte
                  hipótese:
                </p>
                <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-institutional-light">
                  <p className="text-lg font-medium text-institutional-dark dark:text-white">
                    "Estudantes de computação apresentam baixo nível de
                    conscientização sobre riscos éticos e vieses em Internet dos
                    Corpos."
                  </p>
                </blockquote>
                <p className="text-foreground mb-4">
                  A plataforma coleta dados sobre decisões técnicas tomadas
                  pelos participantes em cenários simulados, permitindo análise
                  empírica sobre:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li>Padrões de tomada de decisão em questões éticas</li>
                  <li>
                    Correlações entre formação acadêmica e conscientização
                  </li>
                  <li>Efetividade de feedback educacional contextualizado</li>
                  <li>
                    Identificação de lacunas no ensino de ética em computação
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Privacy & LGPD */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Privacidade e Conformidade
              </h3>
              <Card className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      Proteção de Dados
                    </h4>
                    <p className="text-foreground mb-4">
                      Esta plataforma está em conformidade com a Lei Geral de
                      Proteção de Dados (LGPD):
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-foreground">
                      <li>
                        Consentimento informado explícito antes da participação
                      </li>
                      <li>
                        Anonimização/pseudonimização de dados para análise
                      </li>
                      <li>Coleta mínima de informações pessoais necessárias</li>
                      <li>Armazenamento seguro com criptografia</li>
                      <li>
                        Possibilidade de exclusão de dados mediante solicitação
                      </li>
                      <li>
                        Transparência sobre uso de dados para fins acadêmicos
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-institutional-light">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4 text-institutional-dark dark:text-white">Participe da Pesquisa</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-foreground dark:text-white">
              Contribua para o avanço da conscientização ética em tecnologia.
              Sua participação é voluntária, anônima e leva aproximadamente
              15-20 minutos.
            </p>
            <Button asChild size="lg">
              <Link to="/auth">Começar Agora</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2025 EtiCCista - Projeto de Pesquisa em Ciência da Computação</p>
          <p className="mt-2">
            Desenvolvido para promover a conscientização ética em tecnologia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
