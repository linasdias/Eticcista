import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  BrainCircuit,
  GraduationCap,
  Home,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type AcademicData = {
  course: string;
  has_ethics_discipline: string;
  prior_knowledge_level: number;
};

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  const [totalUsers, setTotalUsers] = useState(0);
  const [courseDistribution, setCourseDistribution] = useState<any[]>([]);
  const [ethicsKnowledge, setEthicsKnowledge] = useState<any[]>([]);
  const [totalDecisions, setTotalDecisions] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }

      // 1. CORREÇÃO: Buscar contagem total de perfis (Usuários Reais)
      // Usamos count: 'exact' e head: true para não baixar os dados, apenas contar. Muito mais rápido.
      const { count: profilesCount, error: profilesError } = await supabase
        .from("profiles")
        .select("*", { count: "exact", head: true });

      if (profilesError) throw profilesError;

      // 2. Buscar Metadados Acadêmicos (Apenas para os gráficos de perfil)
      const { data: academicData, error: academicError } = await supabase
        .from("academic_metadata")
        .select("*");

      if (academicError) throw academicError;

      // 3. Buscar Logs de Decisão (Contagem total)
      const { count: decisionsCount, error: decisionError } = await supabase
        .from("decision_logs")
        .select("*", { count: "exact", head: true });

      if (decisionError) throw decisionError;

      // --- PROCESSAMENTO ---

      // KPI 1: Total de Participantes (Baseado em Profiles)
      setTotalUsers(profilesCount || 0);

      // Outros KPIs
      setTotalDecisions(decisionsCount || 0);

      // Gráfico 1: Distribuição por Curso (Baseado em quem preencheu)
      const coursesCount: Record<string, number> = {};
      academicData?.forEach((row: AcademicData) => {
        const course = row.course || "Não Informado";
        coursesCount[course] = (coursesCount[course] || 0) + 1;
      });

      const courseChartData = Object.keys(coursesCount)
        .map((key) => ({
          name: key,
          value: coursesCount[key],
        }))
        .sort((a, b) => b.value - a.value);

      setCourseDistribution(courseChartData);

      // Gráfico 2: Formação Ética
      const ethicsCount = { Sim: 0, Não: 0, Parcial: 0 };
      academicData?.forEach((row: AcademicData) => {
        if (row.has_ethics_discipline === "yes") ethicsCount["Sim"]++;
        else if (row.has_ethics_discipline === "no") ethicsCount["Não"]++;
        else ethicsCount["Parcial"]++;
      });

      setEthicsKnowledge([
        { name: "Teve Disciplina", value: ethicsCount["Sim"] },
        { name: "Não Teve", value: ethicsCount["Não"] },
        { name: "Parcial", value: ethicsCount["Parcial"] },
      ]);
    } catch (error: any) {
      console.error("Erro ao carregar dashboard:", error);
      toast({
        title: "Erro",
        description: "Falha ao carregar dados analíticos.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <BrainCircuit className="h-12 w-12 text-primary mx-auto animate-pulse" />
          <p className="text-muted-foreground">Processando dados do TCC...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="EtiCCista Logo" className="h-6 w-6" />
            <h1 className="text-xl font-bold">
              Dashboard Analítico - EtiCCista
            </h1>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" /> Voltar
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-8 space-y-8">
        {/* Big Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Participantes
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                Usuários registrados na plataforma
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Decisões Coletadas
              </CardTitle>
              <BrainCircuit className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalDecisions}</div>
              <p className="text-xs text-muted-foreground">
                Interações em cenários
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Cursos Representados
              </CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {courseDistribution.length}
              </div>
              <p className="text-xs text-muted-foreground">
                Diversidade acadêmica
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Distribuição por Curso */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Perfil dos Participantes (Respondentes)</CardTitle>
              <CardDescription>
                Distribuição de estudantes que completaram o perfil
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={courseDistribution}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={true}
                    vertical={false}
                  />
                  <XAxis type="number" allowDecimals={false} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={120}
                    tick={{ fontSize: 11 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                    }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                    cursor={{ fill: "transparent" }}
                  />
                  <Bar
                    dataKey="value"
                    fill="hsl(var(--primary))"
                    radius={[0, 4, 4, 0]}
                    name="Alunos"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Formação Ética Prévia */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Formação Ética Prévia</CardTitle>
              <CardDescription>
                Alunos que já cursaram disciplina de ética
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ethicsKnowledge}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      percent > 0
                        ? `${name} ${(percent * 100).toFixed(0)}%`
                        : ""
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {ethicsKnowledge.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
