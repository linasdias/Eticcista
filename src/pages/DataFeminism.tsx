import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldAlert,
  Heart,
  Users,
  Eye,
  Scale,
  Network,
  BookOpen,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    title: "Examinar o Poder",
    description:
      "O feminismo de dados começa analisando como o poder opera no mundo e como os dados podem reforçar ou desafiar essas estruturas.",
    icon: Eye,
  },
  {
    title: "Desafiar o Poder",
    description:
      "Compromete-se a desafiar estruturas de poder desiguais e trabalhar em direção à justiça.",
    icon: ShieldAlert,
  },
  {
    title: "Elevar Emoção e Corporificação",
    description:
      "Valoriza múltiplas formas de conhecimento, incluindo o conhecimento que vem do corpo e da emoção, não apenas a 'racionalidade' impessoal.",
    icon: Heart,
  },
  {
    title: "Repensar Binários e Hierarquias",
    description:
      "Desafia a classificação binária de gênero (homem/mulher) e outras hierarquias que mascaram a complexidade da realidade.",
    icon: Scale,
  },
  {
    title: "Abraçar o Pluralismo",
    description:
      "Insiste que o conhecimento mais completo vem da síntese de múltiplas perspectivas, priorizando vozes marginalizadas.",
    icon: Users,
  },
  {
    title: "Considerar o Contexto",
    description:
      "Dados não são neutros ou crus; eles são sempre cozidos em um contexto social, cultural e histórico específico.",
    icon: Network,
  },
  {
    title: "Tornar o Trabalho Visível",
    description:
      "Reconhece o trabalho de todos os envolvidos na ciência de dados, incluindo aqueles que limpam, mantêm e coletam os dados.",
    icon: BookOpen,
  },
];

const DataFeminism = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">EtiCCista</h1>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" /> Voltar
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-institutional-dark mb-4">
            O que é Feminismo de Dados?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Uma abordagem para ciência de dados que vai além de códigos e
            estatísticas, focando em justiça, equidade e nas relações de poder
            invisíveis nos algoritmos.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-institutional-light border-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">Definição</h2>
          <p className="text-lg text-foreground leading-relaxed">
            O Feminismo de Dados é uma forma de pensar sobre dados informada
            pela tradição do feminismo interseccional. Não é apenas sobre
            mulheres, mas sobre <strong>poder</strong>: quem o tem, quem não o
            tem e como os dados podem ser usados para desafiar desigualdades
            estruturais em vez de automatizá-las.
          </p>
        </Card>

        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Os 7 Princípios
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((p, i) => (
            <Card
              key={i}
              className="hover:shadow-md transition-shadow border-l-4 border-l-primary"
            >
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">{p.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            Baseado na obra "Data Feminism" de Catherine D'Ignazio e Lauren F.
            Klein (MIT Press, 2020).
          </p>
        </div>
      </main>
    </div>
  );
};

export default DataFeminism;
