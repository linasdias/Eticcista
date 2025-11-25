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
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { storyNodes } from "@/data/storyTree";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown"; // <--- Importante

const ScenarioSimulation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const initialNodeId = searchParams.get("id") || "marcapasso_start";
  const [currentNodeId, setCurrentNodeId] = useState(initialNodeId);
  const [selectedChoice, setSelectedChoice] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const currentNode = storyNodes[currentNodeId];

  useEffect(() => {
    if (!currentNode) {
      toast({
        title: "Erro",
        description: "Cenário não encontrado.",
        variant: "destructive",
      });
      navigate("/");
    }
  }, [currentNodeId, currentNode, navigate, toast]);

  if (!currentNode) return null;

  const selectedChoiceData = currentNode.choices?.find(
    (c) => c.id === selectedChoice
  );
  const isEndOfGame = !currentNode.choices || currentNode.choices.length === 0;

  const handleSubmitChoice = async () => {
    if (!selectedChoice || !selectedChoiceData) return;
    setIsSaving(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        await supabase.from("decision_logs").insert({
          user_id: user.id,
          scenario_id: currentNodeId,
          choice_id: selectedChoice,
        });
      }
      if (selectedChoiceData.feedback) {
        setShowFeedback(true);
      } else {
        handleNextStep();
      }
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleNextStep = () => {
    if (
      selectedChoiceData?.nextNodeId &&
      storyNodes[selectedChoiceData.nextNodeId]
    ) {
      setCurrentNodeId(selectedChoiceData.nextNodeId);
      setSelectedChoice("");
      setShowFeedback(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/completion");
    }
  };

  // Componente auxiliar para renderizar texto com segurança e estilo
  const MarkdownText = ({ content }: { content: string }) => (
    <div className="prose prose-slate dark:prose-invert max-w-none text-foreground leading-relaxed">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );

  if (isEndOfGame) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-3xl p-8 text-center space-y-6 animate-in zoom-in-95 duration-500">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-primary/10">
              <ShieldAlert className="h-12 w-12 text-primary" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground">
            {currentNode.title}
          </h2>

          <div className="bg-muted/30 p-6 rounded-lg text-left border-l-4 border-primary">
            <MarkdownText content={currentNode.description} />
          </div>

          <Button
            size="lg"
            onClick={() => navigate("/completion")}
            className="w-full md:w-auto px-8"
          >
            Concluir Simulação <ArrowRight className="ml-2 h-4 w-4" />
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
          <span className="text-xs font-mono bg-muted px-2 py-1 rounded">
            {currentNodeId}
          </span>
        </div>
      </header>

      <div className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8 shadow-md animate-in fade-in duration-500">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {currentNode.title}
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            {/* Renderização do Texto Rico com Markdown */}
            <div className="mb-8">
              <MarkdownText content={currentNode.description} />
            </div>

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
                          ? "border-primary bg-primary/5 ring-1 ring-primary shadow-sm"
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
                    {/* Renderiza também o texto da opção como Markdown (para permitir negrito nas opções) */}
                    <div className="flex-1 cursor-pointer font-normal leading-relaxed text-base">
                      <ReactMarkdown
                        components={{
                          p: ({ node, ...props }) => <span {...props} />,
                        }}
                      >
                        {choice.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>

            {!showFeedback && (
              <div className="mt-8 flex justify-end">
                <Button
                  onClick={handleSubmitChoice}
                  disabled={!selectedChoice || isSaving}
                  size="lg"
                  className="px-8"
                >
                  {isSaving ? "Registrando..." : "Tomar Decisão"}
                  {!isSaving && <CheckCircle2 className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            )}
          </Card>

          {showFeedback && selectedChoiceData && (
            <div className="animate-in slide-in-from-bottom-8 duration-700 fade-in">
              <Card className="p-8 border-2 border-primary/20 shadow-xl bg-card/50 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <AlertTriangle className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Feedback e Análise
                    </h3>
                    <p className="text-muted-foreground">
                      Consequências da sua escolha
                    </p>
                  </div>
                </div>

                <Alert className="bg-muted/50 border-primary/20 mb-8">
                  <div className="text-base leading-relaxed">
                    <MarkdownText content={selectedChoiceData.feedback} />
                  </div>
                </Alert>

                <div className="flex justify-end">
                  <Button size="lg" onClick={handleNextStep} className="group">
                    Continuar
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
