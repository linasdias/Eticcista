import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast"; // Importando o toast para feedback

const Consent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [consents, setConsents] = useState({
    participation: false,
    dataCollection: false,
    anonymization: false,
    lgpd: false,
  });

  const allConsented = Object.values(consents).every(Boolean);

  const handleSubmit = async () => {
    if (!allConsented) return;
    setIsLoading(true);

    try {
      // 1. Verificar usuário logado
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        toast({
          title: "Sessão expirada",
          description: "Por favor, faça login novamente.",
          variant: "destructive",
        });
        navigate("/auth");
        return;
      }

      // 2. Registrar o consentimento no perfil do usuário
      const { error } = await supabase
        .from("profiles")
        .update({ consented_at: new Date().toISOString() })
        .eq("id", user.id);

      if (error) throw error;

      // 3. Sucesso e navegação
      toast({
        title: "Consentimento registrado",
        description: "Avançando para perfil...",
      });
      navigate("/metadata");
    } catch (error: any) {
      console.error("Erro ao registrar consentimento:", error);
      toast({
        title: "Erro",
        description:
          "Não foi possível salvar seu consentimento. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src="/logo.png" alt="EtiCCista Logo" className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-foreground">EtiCCista</h1>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-8">
              <FileText className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Termo de Consentimento Informado
                </h2>
                <p className="text-muted-foreground">
                  Por favor, leia atentamente e concorde com os termos abaixo
                  para participar da pesquisa
                </p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Objetivo da Pesquisa
                </h3>
                <p className="text-foreground leading-relaxed">
                  Este estudo tem como objetivo investigar o nível de
                  conscientização de estudantes de computação sobre riscos
                  éticos e vieses em tecnologias de Internet dos Corpos (IoB).
                  Os dados coletados serão utilizados exclusivamente para fins
                  acadêmicos no contexto de um Trabalho de Conclusão de Curso em
                  Ciência da Computação.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Procedimentos
                </h3>
                <p className="text-foreground leading-relaxed mb-2">
                  Você será convidado a:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-foreground">
                  <li>
                    Fornecer informações básicas sobre seu perfil acadêmico
                  </li>
                  <li>
                    Participar de cenários interativos simulando decisões
                    técnicas em IoB
                  </li>
                  <li>
                    Tomar decisões em situações que envolvem dilemas éticos
                  </li>
                  <li>Receber feedback educacional sobre suas escolhas</li>
                </ul>
                <p className="text-foreground leading-relaxed mt-2">
                  A participação leva aproximadamente 15-20 minutos.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Coleta e Uso de Dados
                </h3>
                <p className="text-foreground leading-relaxed mb-2">
                  Serão coletados:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-foreground">
                  <li>
                    Metadados: curso, período/semestre, conhecimento prévio
                    sobre ética em IoB
                  </li>
                  <li>Decisões tomadas nos cenários interativos</li>
                  <li>Timestamps de interação</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Privacidade e LGPD
                </h3>
                <p className="text-foreground leading-relaxed mb-2">
                  Em conformidade com a Lei Geral de Proteção de Dados (LGPD):
                </p>
                <ul className="list-disc pl-6 space-y-1 text-foreground">
                  <li>
                    Seus dados serão anonimizados/pseudonimizados para análise
                  </li>
                  <li>
                    Não serão coletadas informações pessoais identificáveis além
                    do e-mail institucional
                  </li>
                  <li>
                    Os dados serão armazenados de forma segura com criptografia
                  </li>
                  <li>
                    Você pode solicitar a exclusão de seus dados a qualquer
                    momento
                  </li>
                  <li>
                    Os resultados agregados poderão ser publicados em contexto
                    acadêmico
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Riscos e Benefícios
                </h3>
                <p className="text-foreground leading-relaxed mb-2">
                  <strong>Riscos:</strong> Mínimos. A participação não envolve
                  riscos físicos, psicológicos ou sociais significativos.
                </p>
                <p className="text-foreground leading-relaxed">
                  <strong>Benefícios:</strong> Você contribuirá para pesquisa
                  sobre ensino de ética em computação e receberá feedback
                  educacional sobre dilemas éticos em IoB.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Voluntariedade
                </h3>
                <p className="text-foreground leading-relaxed">
                  Sua participação é completamente voluntária. Você pode
                  desistir a qualquer momento sem qualquer prejuízo.
                </p>
              </section>
            </div>

            <div className="space-y-4 border-t border-border pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Declaração de Consentimento
              </h3>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="participation"
                  checked={consents.participation}
                  onCheckedChange={(checked) =>
                    setConsents({
                      ...consents,
                      participation: checked as boolean,
                    })
                  }
                />
                <Label
                  htmlFor="participation"
                  className="text-sm text-foreground leading-relaxed cursor-pointer"
                >
                  Declaro que li e compreendi o objetivo desta pesquisa e
                  concordo em participar voluntariamente.
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="dataCollection"
                  checked={consents.dataCollection}
                  onCheckedChange={(checked) =>
                    setConsents({
                      ...consents,
                      dataCollection: checked as boolean,
                    })
                  }
                />
                <Label
                  htmlFor="dataCollection"
                  className="text-sm text-foreground leading-relaxed cursor-pointer"
                >
                  Autorizo a coleta de meus dados de interação, metadados
                  acadêmicos e decisões tomadas nos cenários.
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="anonymization"
                  checked={consents.anonymization}
                  onCheckedChange={(checked) =>
                    setConsents({
                      ...consents,
                      anonymization: checked as boolean,
                    })
                  }
                />
                <Label
                  htmlFor="anonymization"
                  className="text-sm text-foreground leading-relaxed cursor-pointer"
                >
                  Concordo que meus dados sejam anonimizados e utilizados em
                  análises agregadas para fins acadêmicos.
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="lgpd"
                  checked={consents.lgpd}
                  onCheckedChange={(checked) =>
                    setConsents({ ...consents, lgpd: checked as boolean })
                  }
                />
                <Label
                  htmlFor="lgpd"
                  className="text-sm text-foreground leading-relaxed cursor-pointer"
                >
                  Estou ciente de meus direitos sob a LGPD, incluindo acesso,
                  retificação e exclusão de meus dados.
                </Label>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Button
                variant="outline"
                onClick={() => navigate("/")}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!allConsented || isLoading}
                className="flex-1"
              >
                {isLoading ? "Registrando..." : "Concordar e Continuar"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Consent;
