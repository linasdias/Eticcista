import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, BookOpen, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Completion = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="EtiCCista Logo" className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-foreground">EtiCCista</h1>
          </Link>
          <div className="flex gap-4 items-center">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/iob">Internet dos Corpos</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/datafem">Feminismo de Dados</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary/10 p-6">
                <CheckCircle className="h-16 w-16 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-4">
              Simulação Concluída!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Obrigado por participar do EtiCCista. Suas respostas foram registradas e 
              contribuirão para pesquisa sobre conscientização ética em IoB.
            </p>

            <div className="bg-institutional-light p-6 rounded-lg mb-8 text-left">
              <h3 className="text-xl font-semibold text-institutional-dark mb-4">
                O que acontece agora?
              </h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Seus dados foram anonimizados e serão analisados agregadamente junto com 
                    dados de outros participantes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Os resultados contribuirão para pesquisa acadêmica sobre ensino de ética 
                    em computação
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Você pode solicitar acesso aos resultados agregados da pesquisa quando 
                    forem publicados
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Caso deseje excluir seus dados, entre em contato através do e-mail do 
                    pesquisador disponível na página inicial
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Reflexões Finais
              </h3>
              <Card className="p-6 bg-muted text-left">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-3 text-foreground">
                    <p>
                      A Internet dos Corpos representa uma das fronteiras mais críticas da tecnologia 
                      contemporânea. Como futuros profissionais de computação, vocês terão papel 
                      fundamental em garantir que essas tecnologias respeitem:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Privacidade e autonomia corporal</li>
                      <li>Equidade no acesso e representação</li>
                      <li>Segurança de dados sensíveis de saúde</li>
                      <li>Transparência algorítmica</li>
                      <li>Consentimento informado genuíno</li>
                    </ul>
                    <p className="font-semibold text-primary">
                      Tecnologia ética não acontece por acidente - ela exige decisões conscientes 
                      e corajosas de desenvolvedores comprometidos com o bem-estar humano.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Voltar ao Início
                </Link>
              </Button>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Dúvidas ou feedback sobre a plataforma? Entre em contato através da página inicial.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 EtiCCista - Pesquisa Acadêmica em Ciência da Computação
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Completion;
