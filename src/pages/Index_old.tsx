import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, ShieldAlert, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">EtiCCista</h1>
            </div>
            <Button asChild>
              <Link to="/auth">Acessar Sistema</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-institutional-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-institutional-dark mb-4">
              Simulador Educacional sobre Internet dos Corpos e Feminismo de Dados
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Plataforma interativa para conscientização sobre riscos éticos, vieses de dados e 
              desafios de privacidade em tecnologias de Internet dos Corpos (IoB)
            </p>
          </div>
        </div>
      </section>

      {/* About IoB Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">O que é Internet dos Corpos?</h3>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="mb-4">
                A Internet dos Corpos (IoB) refere-se a dispositivos conectados que coletam dados biométricos 
                e de saúde, desde wearables fitness até implantes médicos e sistemas de monitoramento contínuo. 
                Essas tecnologias levantam questões críticas sobre:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Privacidade e consentimento informado</li>
                <li>Vieses algorítmicos e discriminação</li>
                <li>Segurança de dados sensíveis de saúde</li>
                <li>Autonomia corporal e autodeterminação</li>
                <li>Equidade no acesso e representação de dados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Funcionalidades da Plataforma
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-3">Cenários Interativos</h4>
              <p className="text-muted-foreground">
                Simule decisões técnicas em desenvolvimento de IoB através de narrativas baseadas 
                em casos reais, com feedback técnico contextualizado.
              </p>
            </Card>

            <Card className="p-6">
              <ShieldAlert className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-3">Análise Ética</h4>
              <p className="text-muted-foreground">
                Receba feedback imediato sobre implicações éticas de suas escolhas, com referências 
                a princípios de privacidade, equidade e segurança.
              </p>
            </Card>

            <Card className="p-6">
              <BarChart3 className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-3">Dados para Pesquisa</h4>
              <p className="text-muted-foreground">
                Sistema coleta dados anonimizados para pesquisa acadêmica sobre conscientização 
                ética em estudantes de computação.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Context */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">Contexto da Pesquisa</h3>
            <Card className="p-8">
              <p className="text-foreground mb-4">
                Este simulador é parte de um Trabalho de Conclusão de Curso (TCC) em Ciência da Computação 
                que investiga a seguinte hipótese:
              </p>
              <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-institutional-light">
                <p className="text-lg font-medium text-institutional-dark">
                  "Estudantes de computação apresentam baixo nível de conscientização sobre riscos 
                  éticos e vieses em Internet dos Corpos."
                </p>
              </blockquote>
              <p className="text-foreground mb-4">
                A plataforma coleta dados sobre decisões técnicas tomadas pelos participantes em 
                cenários simulados, permitindo análise empírica sobre:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Padrões de tomada de decisão em questões éticas</li>
                <li>Correlações entre formação acadêmica e conscientização</li>
                <li>Efetividade de feedback educacional contextualizado</li>
                <li>Identificação de lacunas no ensino de ética em computação</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy & LGPD */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">Privacidade e Conformidade</h3>
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-3">Proteção de Dados</h4>
                  <p className="text-foreground mb-4">
                    Esta plataforma está em conformidade com a Lei Geral de Proteção de Dados (LGPD):
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground">
                    <li>Consentimento informado explícito antes da participação</li>
                    <li>Anonimização/pseudonimização de dados para análise</li>
                    <li>Coleta mínima de informações pessoais necessárias</li>
                    <li>Armazenamento seguro com criptografia</li>
                    <li>Possibilidade de exclusão de dados mediante solicitação</li>
                    <li>Transparência sobre uso de dados para fins acadêmicos</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Participe da Pesquisa</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contribua para o avanço da conscientização ética em tecnologia. 
            Sua participação é voluntária, anônima e leva aproximadamente 15-20 minutos.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/auth">Começar Agora</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">
            © 2025 EtiCCista - Trabalho de Conclusão de Curso
          </p>
          <p className="text-sm">
            Projeto acadêmico desenvolvido para fins de pesquisa em Ciência da Computação
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
