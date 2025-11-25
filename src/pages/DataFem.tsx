import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const DataFem = () => {
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
                <Link to="/iob" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Internet dos Corpos
                </Link>
                <Link to="/datafem" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
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
              Feminismo de Dados
            </h1>
            <p className="text-xl text-foreground/80 dark:text-white mb-6">
              Questionar como dados, tecnologia e poder se cruzam para afetar principalmente mulheres e pessoas marginalizadas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What is Data Feminism */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                O que é Feminismo de Dados?
              </h2>
              <Card className="p-8 border-0 bg-card/50 backdrop-blur">
                <p className="text-lg text-foreground/80 dark:text-white/80 mb-4">
                  Feminismo de Dados é uma abordagem crítica que questiona como dados, análise de dados e tecnologia são usadas para perpetuar desigualdades, especialmente contra mulheres, pessoas negras e comunidades marginalizadas.
                </p>
                <p className="text-lg text-foreground/80 dark:text-white/80 mb-4">
                  Não é apenas sobre incluir mais mulheres em ciência de dados. É sobre reconhecer que dados nunca são "objetivos"—eles refletem os valores, preconceitos e poder de quem os coletou e analisa.
                </p>
                <p className="text-lg text-foreground/80 dark:text-white/80">
                  Data feminism reconhece que toda decisão técnica tem consequências sociais e políticas reais para pessoas humanas.
                </p>
              </Card>
            </section>

            {/* Core Principles */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Princípios Fundamentais
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-0 bg-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-3 dark:text-white flex items-center gap-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Dados não são objetivos
                  </h3>
                  <p className="text-foreground/70 dark:text-white/70">
                    Dados são criados, coletados e interpretados por pessoas com vieses, interesses e poder. Sempre há escolhas por trás deles.
                  </p>
                </Card>

                <Card className="p-6 border-0 bg-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-3 dark:text-white flex items-center gap-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Poder e equidade importam
                  </h3>
                  <p className="text-foreground/70 dark:text-white/70">
                    Quem tem acesso aos dados? Quem controla os algoritmos? Estas são questões de poder que afetam quem prospera e quem é prejudicado.
                  </p>
                </Card>

                <Card className="p-6 border-0 bg-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-3 dark:text-white flex items-center gap-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Ouvir as margens
                  </h3>
                  <p className="text-foreground/70 dark:text-white/70">
                    Pessoas que são prejudicadas por sistemas de dados têm conhecimento crucial. Suas vozes devem estar no centro, não nas margens.
                  </p>
                </Card>

                <Card className="p-6 border-0 bg-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-3 dark:text-white flex items-center gap-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Ação coletiva é essencial
                  </h3>
                  <p className="text-foreground/70 dark:text-white/70">
                    Mudança acontece quando comunidades se organizam para questionar e reimaginar tecnologia e dados de forma coletiva.
                  </p>
                </Card>
              </div>
            </section>

            {/* Critical Issues */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Questões Críticas na Intersecção com IoB
              </h2>
              <Card className="p-8 border-0 bg-card/50">
                <ul className="space-y-4 text-lg text-foreground/80 dark:text-white/80">
                  <li className="flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Invisibilidade de Dados:</strong> Mulheres são frequentemente subrepresentadas em datasets de saúde, resultando em sistemas que não funcionam para elas.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Viés Algorítmico:</strong> Algoritmos treinados com dados tendenciosos perpetuam discriminação contra mulheres e minorias.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Trabalho Invisível:</strong> Mulheres realizam a maioria do trabalho de rotulação de dados, treinamento de IA, mas não recebem reconhecimento ou compensação justa.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Vigilância Desproporcional:</strong> Mulheres, especialmente mulheres negras, são sujeitas a mais vigilância através de sistemas de dados.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span><strong>Controle Reprodutivo:</strong> Dados sobre saúde reprodutiva de mulheres são coletados e usados para controle e discriminação.</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* Towards Change */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Caminho para Mudança
              </h2>
              <Card className="p-8 border-0 bg-institutional-light/30">
                <p className="text-lg text-foreground/80 dark:text-white/80 mb-6">
                  Feminismo de dados não é apenas crítica—é também visão para futuros alternativos. Reimagina quem participa na criação de dados e tecnologia, cujos interesses são servidos, e como podemos construir sistemas de dados que servem à justiça.
                </p>
                <div className="space-y-3 text-foreground/80 dark:text-white/80">
                  <p className="flex gap-3"><span className="text-primary font-bold flex-shrink-0">✓</span> Incluir mulheres e pessoas marginalizadas na tomada de decisões tecnológica</p>
                  <p className="flex gap-3"><span className="text-primary font-bold flex-shrink-0">✓</span> Questionar narrativas de "neutralidade técnica" e reconhecer escolhas políticas</p>
                  <p className="flex gap-3"><span className="text-primary font-bold flex-shrink-0">✓</span> Lutar por transparência e justiça nos sistemas de dados</p>
                  <p className="flex gap-3"><span className="text-primary font-bold flex-shrink-0">✓</span> Apoiar alternativas feministas e comunitárias a big tech</p>
                  <p className="flex gap-3"><span className="text-primary font-bold flex-shrink-0">✓</span> Reconhecer dados como questão de justiça social, não apenas eficiência</p>
                </div>
              </Card>
            </section>

            {/* Call to Action */}
            <section className="text-center py-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                Explore as Consequências Reais
              </h2>
              <p className="text-lg text-foreground/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
                Participe de simulações para entender como decisões técnicas e dados afetam mulheres e comunidades marginalizadas
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

export default DataFem;