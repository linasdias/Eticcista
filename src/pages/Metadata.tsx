import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShieldAlert, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Metadata = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
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

    try {
      // 1. Verificar quem está logado
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

      // 2. Enviar dados para a tabela que acabamos de criar
      const { error } = await supabase.from("academic_metadata").insert({
        user_id: user.id,
        course: formData.course,
        semester: formData.semester,
        has_ethics_discipline: formData.hasEthicsDiscipline,
        prior_knowledge_level: parseInt(formData.priorKnowledge),
      });

      if (error) throw error;

      // 3. Sucesso
      toast({
        title: "Dados salvos!",
        description: "Perfil acadêmico registrado.",
      });

      // Pequeno delay para o usuário ver o toast antes de mudar de tela
      setTimeout(() => {
        navigate("/simulation");
      }, 1000);
    } catch (error: any) {
      console.error("Erro ao salvar metadados:", error);
      toast({
        title: "Erro ao salvar",
        description: error.message || "Verifique sua conexão.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = Object.values(formData).every((value) => value !== "");

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
                  Para fins estatísticos do TCC, precisamos saber seu perfil.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Seleção de Curso */}
              <div className="space-y-2">
                <Label htmlFor="course">Curso</Label>
                <Select
                  value={formData.course}
                  onValueChange={(value) =>
                    setFormData({ ...formData, course: value })
                  }
                >
                  <SelectTrigger id="course">
                    <SelectValue placeholder="Selecione seu curso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ciência da Computação">
                      Ciência da Computação
                    </SelectItem>
                    <SelectItem value="Sistemas de Informação">
                      Sistemas de Informação
                    </SelectItem>
                    <SelectItem value="Engenharia de Software">
                      Engenharia de Software
                    </SelectItem>
                    <SelectItem value="Engenharia da Computação">
                      Engenharia da Computação
                    </SelectItem>
                    <SelectItem value="Análise e Desenv. de Sistemas">
                      Análise e Desenv. de Sistemas
                    </SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Seleção de Semestre */}
              <div className="space-y-2">
                <Label htmlFor="semester">Semestre Atual</Label>
                <Select
                  value={formData.semester}
                  onValueChange={(value) =>
                    setFormData({ ...formData, semester: value })
                  }
                >
                  <SelectTrigger id="semester">
                    <SelectValue placeholder="Selecione o semestre" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(10)].map((_, i) => (
                      <SelectItem key={i} value={String(i + 1)}>
                        {i + 1}º Semestre
                      </SelectItem>
                    ))}
                    <SelectItem value="concluido">Já concluído</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pergunta sobre Ética */}
              <div className="space-y-3">
                <Label>Já cursou disciplina de Ética em Computação?</Label>
                <RadioGroup
                  value={formData.hasEthicsDiscipline}
                  onValueChange={(value) =>
                    setFormData({ ...formData, hasEthicsDiscipline: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="ethics-yes" />
                    <Label htmlFor="ethics-yes">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="ethics-no" />
                    <Label htmlFor="ethics-no">Não</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partial" id="ethics-partial" />
                    <Label htmlFor="ethics-partial">
                      Apenas tópicos em outras matérias
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Autoavaliação */}
              <div className="space-y-3">
                <Label>
                  Conhecimento prévio sobre Internet dos Corpos (1-5)
                </Label>
                <RadioGroup
                  value={formData.priorKnowledge}
                  onValueChange={(value) =>
                    setFormData({ ...formData, priorKnowledge: value })
                  }
                  className="flex space-x-4"
                >
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div key={level} className="flex flex-col items-center">
                      <RadioGroupItem
                        value={String(level)}
                        id={`know-${level}`}
                      />
                      <Label htmlFor={`know-${level}`} className="mt-1">
                        {level}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <p className="text-xs text-muted-foreground">
                  1 = Nenhum, 5 = Especialista
                </p>
              </div>

              <Button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="w-full"
              >
                {isLoading ? "Salvando..." : "Iniciar Simulação"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Metadata;
