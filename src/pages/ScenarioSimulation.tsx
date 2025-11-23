import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { storyNodes } from "@/data/storyTree"; // Importando a Árvore
import { useToast } from "@/hooks/use-toast";

const ScenarioSimulation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Começa pelo nó raiz definido no storyTree
  const [currentNodeId, setCurrentNodeId] = useState("marcapasso_start");
  const [selectedChoice, setSelectedChoice] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const currentNode = storyNodes[currentNodeId];

  // Encontra os dados da escolha selecionada
  const selectedChoiceData = currentNode?.choices?.find(
    (c) => c.id === selectedChoice
  );

  // Verifica se o nó atual é um final de jogo (sem escolhas ou type ending e sem nextNode)
  const isEndOfGame = !currentNode?.choices || currentNode.choices.length === 0;

  useEffect(() => {
    if (!currentNode) {
      console.error(`Nó não encontrado: ${currentNodeId}`);
      // Fallback se o nó não existir
    }
  }, [currentNodeId]);

  const handleSubmitChoice = async () => {
    if (!selectedChoice || !selectedChoiceData) return;
    setIsSaving(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // Log da decisão
        await supabase.from("decision_logs").insert({
          user_id: user.id,
          scenario_id: currentNodeId,
          choice_id: selectedChoice,
        });
      }

      // Se a escolha tem feedback, mostra. Se for apenas transição, já avança.
      if (selectedChoiceData.feedback) {
        setShowFeedback(true);
        setTimeout(() => {
          document
            .getElementById("feedback-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        handleNextStep();
      }
    } catch (error) {
      console.error("Erro:", error);
      toast({ title: "Erro de conexão", variant: "destructive" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleNextStep = () => {
    if (selectedChoiceData?.nextNodeId) {
      // Navega para o próximo nó da árvore
      setCurrentNodeId(selectedChoiceData.nextNodeId);
      setSelectedChoice("");
      setShowFeedback(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Se não tem próximo nó, acabou a simulação
      navigate("/completion");
    }
  };

  // Se chegou num nó sem saída (Fim da árvore), mostra botão de finalizar
  if (isEndOfGame) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-2xl p-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">
            {currentNode.title}
          </h2>
          <p className="text-lg text-foreground">{currentNode.description}</p>
          <Button
            size="lg"
            onClick={() => navigate("/completion")}
            className="w-full"
          >
            Concluir Simulação <ArrowRight className="ml-2" />
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <ShieldAlert className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">EtiCCista</h1>
          </Link>
          <span className="text-sm text-muted-foreground font-mono">
            Nó: {currentNodeId}
          </span>
        </div>
      </header>

      <div className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8 animate-in fade-in duration-500">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {currentNode.title}
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <p className="text-lg text-foreground leading-relaxed mb-8">
              {currentNode.description}
            </p>

            <RadioGroup
              value={selectedChoice}
              onValueChange={setSelectedChoice}
              disabled={showFeedback}
            >
              <div className="space-y-3">
                {currentNode.choices?.map((choice) => (
                  <div
                    key={choice.id}
                    className={`flex items-start space-x-3 p-4 rounded-lg border transition-all cursor-pointer
                      ${
                        selectedChoice === choice.id
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-border hover:border-primary/50 hover:bg-accent"
                      }
                      ${
                        showFeedback && selectedChoice !== choice.id
                          ? "opacity-50"
                          : ""
                      }
                    `}
                    onClick={() =>
                      !showFeedback && setSelectedChoice(choice.id)
                    }
                  >
                    <RadioGroupItem
                      value={choice.id}
                      id={choice.id}
                      className="mt-1"
                    />
                    <Label
                      htmlFor={choice.id}
                      className="flex-1 cursor-pointer font-normal leading-relaxed"
                    >
                      {choice.text}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            {!showFeedback && (
              <div className="mt-8 flex justify-end">
                <Button
                  onClick={handleSubmitChoice}
                  disabled={!selectedChoice || isSaving}
                  className="px-8"
                >
                  {isSaving ? "Processando..." : "Tomar Decisão"}
                  {!isSaving && <CheckCircle2 className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            )}
          </Card>

          {showFeedback && selectedChoiceData && (
            <div id="feedback-section">
              <Card className="p-8 border-2 border-primary/20 shadow-lg animate-in slide-in-from-bottom-4 fade-in">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <AlertTriangle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Consequências
                    </h3>
                  </div>
                </div>

                <Alert className="bg-muted/50 border-primary/20 mb-6">
                  <AlertTitle>Feedback Ético</AlertTitle>
                  <AlertDescription className="mt-2 text-base leading-relaxed">
                    {selectedChoiceData.feedback}
                  </AlertDescription>
                </Alert>

                <div className="flex justify-end">
                  <Button size="lg" onClick={handleNextStep}>
                    Continuar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScenarioSimulation;
