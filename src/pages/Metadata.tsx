import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShieldAlert, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Metadata = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    course: "",
    semester: "",
    hasEthicsDiscipline: "",
    priorKnowledge: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Save metadata to database (will be implemented)
    setTimeout(() => {
      setIsLoading(false);
      navigate("/simulation");
    }, 1000);
  };

  const isFormValid = Object.values(formData).every(value => value !== "");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ShieldAlert className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">EtiCCista</h1>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-8">
              <User className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Perfil do Participante
                </h2>
                <p className="text-muted-foreground">
                  Forneça informações sobre seu perfil acadêmico
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="course">Curso</Label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => setFormData({ ...formData, course: value })}
                >
                  <SelectTrigger id="course">
                    <SelectValue placeholder="Selecione seu curso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cc">Ciência da Computação</SelectItem>
                    <SelectItem value="si">Sistemas de Informação</SelectItem>
                    <SelectItem value="es">Engenharia de Software</SelectItem>
                    <SelectItem value="ec">Engenharia da Computação</SelectItem>
                    <SelectItem value="ads">Análise e Desenvolvimento de Sistemas</SelectItem>
                    <SelectItem value="rc">Redes de Computadores</SelectItem>
                    <SelectItem value="si-tec">Segurança da Informação</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="semester">Período/Semestre Atual</Label>
                <Select
                  value={formData.semester}
                  onValueChange={(value) => setFormData({ ...formData, semester: value })}
                >
                  <SelectTrigger id="semester">
                    <SelectValue placeholder="Selecione o período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1º Período</SelectItem>
                    <SelectItem value="2">2º Período</SelectItem>
                    <SelectItem value="3">3º Período</SelectItem>
                    <SelectItem value="4">4º Período</SelectItem>
                    <SelectItem value="5">5º Período</SelectItem>
                    <SelectItem value="6">6º Período</SelectItem>
                    <SelectItem value="7">7º Período</SelectItem>
                    <SelectItem value="8">8º Período</SelectItem>
                    <SelectItem value="9">9º Período</SelectItem>
                    <SelectItem value="10">10º Período ou mais</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Você já cursou alguma disciplina relacionada a ética em computação, privacidade de dados ou tópicos similares?</Label>
                <RadioGroup
                  value={formData.hasEthicsDiscipline}
                  onValueChange={(value) => setFormData({ ...formData, hasEthicsDiscipline: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="ethics-yes" />
                    <Label htmlFor="ethics-yes" className="font-normal cursor-pointer">
                      Sim
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="ethics-no" />
                    <Label htmlFor="ethics-no" className="font-normal cursor-pointer">
                      Não
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partial" id="ethics-partial" />
                    <Label htmlFor="ethics-partial" className="font-normal cursor-pointer">
                      Apenas tópicos pontuais em outras disciplinas
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Como você avalia seu conhecimento prévio sobre Internet dos Corpos (IoB) e seus riscos éticos?</Label>
                <RadioGroup
                  value={formData.priorKnowledge}
                  onValueChange={(value) => setFormData({ ...formData, priorKnowledge: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="knowledge-1" />
                    <Label htmlFor="knowledge-1" className="font-normal cursor-pointer">
                      1 - Nenhum conhecimento
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="knowledge-2" />
                    <Label htmlFor="knowledge-2" className="font-normal cursor-pointer">
                      2 - Conhecimento muito básico
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="knowledge-3" />
                    <Label htmlFor="knowledge-3" className="font-normal cursor-pointer">
                      3 - Conhecimento moderado
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="knowledge-4" />
                    <Label htmlFor="knowledge-4" className="font-normal cursor-pointer">
                      4 - Conhecimento avançado
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5" id="knowledge-5" />
                    <Label htmlFor="knowledge-5" className="font-normal cursor-pointer">
                      5 - Conhecimento especializado
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-8 flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/consent")}
                  className="flex-1"
                >
                  Voltar
                </Button>
                <Button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className="flex-1"
                >
                  {isLoading ? "Salvando..." : "Continuar"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Metadata;
