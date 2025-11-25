import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldAlert,
  Activity,
  Wifi,
  Cpu,
  Lock,
  UserX,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const generations = [
  {
    title: "1ª Geração: Corpo Externo",
    desc: "Dispositivos usados externamente que monitoram o corpo, mas não interferem diretamente.",
    examples:
      "Smartwatches (Apple Watch), anéis inteligentes (Oura), pulseiras fitness.",
    icon: Activity,
  },
  {
    title: "2ª Geração: Corpo Interno",
    desc: "Dispositivos implantados ou ingeridos que monitoram ou alteram funções corporais.",
    examples: "Marcapassos conectados, implantes cocleares, pílulas digitais.",
    icon: Wifi,
  },
  {
    title: "3ª Geração: Fusão Corporal",
    desc: "Tecnologia fundida com o corpo biológico, permitindo comunicação direta cérebro-máquina.",
    examples:
      "Interfaces neurais (Neuralink), próteses controladas pela mente.",
    icon: Cpu,
  },
];

const risks = [
  {
    title: "Privacidade Física",
    desc: "Seus dados biológicos mais íntimos (batimentos, sono, ciclo) podem ser vendidos para seguradoras ou empregadores.",
    icon: UserX,
  },
  {
    title: "Segurança Cibernética",
    desc: "Dispositivos implantáveis podem ser hackeados, gerando riscos reais à vida (ex: desativar um marcapasso).",
    icon: Lock,
  },
  {
    title: "Autonomia",
    desc: "Quem é dono dos dados gerados pelo seu corpo? O usuário ou a fabricante do dispositivo?",
    icon: ShieldAlert,
  },
];

const InternetOfBodies = () => {
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
            Internet dos Corpos (IoB)
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Quando o corpo humano se torna uma plataforma de dados conectada à
            rede mundial.
          </p>
        </div>

        <div className="grid gap-8 mb-16">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Activity className="text-primary" />
              As Três Gerações da IoB
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {generations.map((gen, i) => (
                <Card
                  key={i}
                  className="bg-card hover:shadow-md transition-all"
                >
                  <CardHeader>
                    <div className="mb-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <gen.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{gen.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {gen.desc}
                    </p>
                    <p className="text-xs font-semibold text-primary">
                      Exemplos: {gen.examples}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-muted/30 p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Principais Riscos Éticos
            </h2>
            <div className="grid gap-6">
              {risks.map((risk, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-background p-3 rounded-lg border shadow-sm text-destructive">
                    <risk.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">
                      {risk.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {risk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default InternetOfBodies;
