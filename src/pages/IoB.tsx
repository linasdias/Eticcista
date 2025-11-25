import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const IoB = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="EtiCCista Logo" className="h-8 w-8" />
              <h1 className="text-2xl font-bold text-foreground">EtiCCista</h1>
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-6">
                <Link to="/iob" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Internet dos Corpos
                </Link>
                <Link to="/datafem" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Feminismo de Dados
                </Link>
              </nav>
              <ThemeToggle />
              <Button asChild>
                <Link to="/auth">Acessar Sistema</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-institutional-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-foreground mb-6 dark:text-white">
              Internet dos Corpos (IoB)
            </h1>
            <p className="text-xl text-foreground/80 dark:text-white mb-6">
              A conexão digital entre corpos, dados e sistemas: entenda como a tecnologia transforma nossa relação com o físico
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What is IoB */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                O que é Internet dos Corpos?
              </h2>
              <Card className="p-8 border-0 bg-card/50 backdrop-blur">
                <p className="text-lg text-foreground/80 dark:text-white/80 mb-4">
                  A Internet dos Corpos (do inglês Internet of Bodies, IoB) refere-se à interconexão de corpos humanos com dispositivos digitais e redes de dados. É a extensão do conceito de Internet das Coisas (IoT) aplicado especificamente ao corpo humano e à sua saúde.
                </p>
                <p className="text-lg text-foreground/80 dark:text-white/80 mb-4">
                  Inclui dispositivos como smartwatches, pulseiras de fitness, implantes médicos, sensores biométricos, e sistemas de monitoramento de saúde que coletam dados contínuos sobre nossos corpos.
                </p>
                <p className="text-lg text-foreground/80 dark:text-white/80">
                  Essa convergência de tecnologia e biologia levanta questões fundamentais sobre privacidade, autonomia, equidade e justiça social.
                </p>
              </Card>
            </section>

            {/* Key Dimensions */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Dimensões Principais
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-0 bg-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-3 dark:text-white flex items-center gap-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Coleta de Dados
                  </h3>
                  <p className="text-foreground/70 dark:text-white/70">
                    Dispositivos wearables e sensores coletam dados biométricos continuamente: frequência cardíaca, passos, sono, temperatura corporal, glicose, etc.
                  </p>
                </Card>

                <Card className="p-6 border-0 bg-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-3 dark:text-white flex items-center gap-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Processamento de Dados
                  </h3>
                  <p className="text-foreground/70 dark:text-white/70">
                    Algoritmos de IA analisam os dados corporais para gerar insights sobre saúde, comportamento e previsões médicas.
                  </p>
                </Card>

                <Card className="p-6 border-0 bg-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-3 dark:text-white flex items-center gap-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Monetização
                  </h3>
                  <p className="text-foreground/70 dark:text-white/70">
                    Dados corporais são comercializados por empresas de saúde, seguros, marketing e pesquisa, criando novos mercados.
                  </p>
                </Card>

                <Card className="p-6 border-0 bg-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-3 dark:text-white flex items-center gap-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Vigilância e Controle
                  </h3>
                  <p className="text-foreground/70 dark:text-white/70">
                    Empregadores, governos e corporações podem acessar dados corporais para monitoramento, discriminação ou controle social.
                  </p>
                </Card>
              </div>
            </section>

            {/* Implications */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Implicações Sociais e Éticas
              </h2>
              <Card className="p-8 border-0 bg-card/50">
                <ul className="space-y-4 text-lg text-foreground/80 dark:text-white/80">
                  <li className="flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Privacidade:</strong> Nossos dados corporais são altamente sensíveis e sujeitos a vazamentos e exploração.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Discriminação:</strong> Algoritmos podem usar dados de saúde para discriminar em contratação, seguros e acesso a serviços.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Autonomia:</strong> Quem controla nossos dados corporais controla narrativas sobre nossa saúde e corpo.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Desigualdade:</strong> Apenas alguns têm acesso a tecnologia IoB de qualidade; outros são monitorados sem consentimento.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Agência:</strong> Plataformas fazem recomendações sobre nossos corpos sem nossa participação real nas decisões.</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* Call to Action */}
            <section className="text-center py-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Explore as Consequências Reais
              </h2>
              <p className="text-lg text-foreground/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
                Participe de simulações para entender como decisões técnicas sobre IoB afetam pessoas reais
              </p>
              <Button size="lg" asChild>
                <Link to="/auth" className="inline-flex items-center gap-2">
                  Começar Simulação
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>EtiCCista © 2024 | Educando sobre Ética Técnica, Internet of Bodies e Feminismo de Dados</p>
        </div>
      </footer>
    </div>
  );
};

export default IoB;