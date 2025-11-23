import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert, AlertTriangle, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { scenarios, type Scenario, type Choice } from "@/data/scenarios";

const ScenarioSimulation = () => {
  const navigate = useNavigate();
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [responses, setResponses] = useState<{ scenarioId: number; choiceId: string }[]>([]);

  const currentScenario = scenarios[currentScenarioIndex];
  const progress = ((currentScenarioIndex + 1) / scenarios.length) * 100;

  const selectedChoiceData = currentScenario.choices.find(c => c.id === selectedChoice);

  const handleSubmitChoice = () => {
    if (!selectedChoice) return;

    // Save response
    setResponses([...responses, {
      scenarioId: currentScenario.id,
      choiceId: selectedChoice
    }]);

    setShowFeedback(true);
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedChoice("");
      setShowFeedback(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Completed all scenarios
      navigate("/completion");
    }
  };

  const handlePreviousScenario = () => {
    if (currentScenarioIndex > 0) {
      setCurrentScenarioIndex(currentScenarioIndex - 1);
      setSelectedChoice("");
      setShowFeedback(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ShieldAlert className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">EtiCCista</h1>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Cenário {currentScenarioIndex + 1} de {scenarios.length}
              </span>
            </div>
          </div>
          <div className="mt-3">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Scenario Card */}
          <Card className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {currentScenario.title}
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Contexto</h3>
                <p className="text-foreground leading-relaxed">{currentScenario.context}</p>
              </div>

              <div className="bg-institutional-light p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-institutional-dark mb-2">Situação</h3>
                <p className="text-foreground leading-relaxed">{currentScenario.situation}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {currentScenario.question}
                </h3>

                {!showFeedback ? (
                  <>
                    <RadioGroup value={selectedChoice} onValueChange={setSelectedChoice}>
                      <div className="space-y-3">
                        {currentScenario.choices.map((choice) => (
                          <div
                            key={choice.id}
                            className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-institutional-light/50 transition-all cursor-pointer"
                          >
                            <RadioGroupItem value={choice.id} id={choice.id} className="mt-1" />
                            <Label
                              htmlFor={choice.id}
                              className="flex-1 text-foreground leading-relaxed cursor-pointer"
                            >
                              {choice.text}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>

                    <div className="mt-6 flex gap-4">
                      {currentScenarioIndex > 0 && (
                        <Button
                          variant="outline"
                          onClick={handlePreviousScenario}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Anterior
                        </Button>
                      )}
                      <Button
                        onClick={handleSubmitChoice}
                        disabled={!selectedChoice}
                        className="ml-auto"
                      >
                        Ver Feedback
                        <CheckCircle2 className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </Card>

          {/* Feedback Card */}
          {showFeedback && selectedChoiceData && (
            <Card className="p-8 border-2 border-primary animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedChoiceData.feedback.title}
                  </h3>
                  <div className="h-1 w-16 bg-primary rounded-full"></div>
                </div>
              </div>

              <div className="space-y-6">
                <Alert>
                  <AlertTitle className="text-lg font-semibold">Análise</AlertTitle>
                  <AlertDescription className="text-foreground leading-relaxed mt-2">
                    {selectedChoiceData.feedback.description}
                  </AlertDescription>
                </Alert>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-primary" />
                    Princípio Ético Relacionado
                  </h4>
                  <p className="text-foreground font-medium bg-institutional-light p-4 rounded-lg">
                    {selectedChoiceData.feedback.ethicalPrinciple}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Riscos Identificados</h4>
                  <ul className="space-y-2">
                    {selectedChoiceData.feedback.risks.map((risk, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground">
                        <span className="text-destructive mt-1">⚠</span>
                        <span className="leading-relaxed">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-institutional-light p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-institutional-dark mb-3">
                    Recomendação Técnica
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    {selectedChoiceData.feedback.recommendation}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowFeedback(false);
                    setSelectedChoice("");
                  }}
                >
                  Revisar Escolhas
                </Button>
                <Button
                  onClick={handleNextScenario}
                  className="ml-auto"
                >
                  {currentScenarioIndex < scenarios.length - 1 ? "Próximo Cenário" : "Finalizar"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScenarioSimulation;
