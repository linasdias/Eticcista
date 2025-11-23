import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShieldAlert, Play, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Simulation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isChecking, setIsChecking] = useState(true); // Estado para evitar "piscada" da tela

  // Verifica autenticação ao carregar
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (!session) {
          toast({
            title: "Acesso Restrito",
            description: "Faça login para continuar.",
            variant: "destructive",
          });
          navigate("/auth");
        }
      } finally {
        setIsChecking(false);
      }
    };
    checkAuth();
  }, [navigate, toast]);

  // Mostra um loading enquanto verifica a sessão para não exibir conteúdo indevido
  if (isChecking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <ShieldAlert className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">EtiCCista</h1>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-8">
              <Play className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Cenários Interativos
                </h2>
                <p className="text-muted-foreground">
                  Você será apresentado a situações realistas de desenvolvimento
                  em IoB
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Como Funciona
              </h3>
              <div className="space-y-3 text-foreground">
                <p className="flex items-start gap-2">
                  <span className="font-semibold text-primary">1.</span>
                  <span>
                    Você lerá cenários que simulam decisões técnicas reais em
                    projetos de Internet dos Corpos
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-semibold text-primary">2.</span>
                  <span>
                    Para cada cenário, você escolherá entre opções de design,
                    implementação ou gestão de dados
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-semibold text-primary">3.</span>
                  <span>
                    Após cada escolha, você receberá feedback técnico
                    contextualizado sobre implicações éticas
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-semibold text-primary">4.</span>
                  <span>
                    Não existem respostas "certas" ou "erradas" - queremos
                    entender seu raciocínio atual
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-institutional-light p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-institutional-dark mb-2">
                Importante
              </h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li>• Não há limite de tempo para responder</li>
                <li>• Você pode reler os cenários quantas vezes quiser</li>
                <li>
                  • Suas respostas são anônimas e não serão associadas à sua
                  identidade
                </li>
                <li>• O feedback educacional será exibido após cada decisão</li>
                <li>
                  • São 5 cenários no total, levando aproximadamente 15-20
                  minutos
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Ao iniciar, você será apresentado ao primeiro cenário
              </p>
              <Button size="lg" onClick={() => navigate("/scenario")}>
                Iniciar Simulação
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
