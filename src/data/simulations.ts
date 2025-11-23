import {
  Activity,
  Smartphone,
  ShieldAlert,
  BrainCircuit,
  Lock,
} from "lucide-react";

export interface SimulationMeta {
  id: string; // Deve bater com o ID inicial no storyTree.ts
  title: string;
  description: string;
  icon: any; // Componente Lucide
  category: "Saúde" | "Privacidade" | "Algoritmos" | "Segurança";
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  estimatedTime: string;
}

export const simulations: SimulationMeta[] = [
  {
    id: "marcapasso_start",
    title: "O Dilema do Marcapasso",
    description:
      "Um dispositivo médico crítico, uma funcionalidade de marketing e um risco de vida. Decida o equilíbrio entre inovação e segurança.",
    icon: Activity,
    category: "Segurança",
    difficulty: "Intermediário",
    estimatedTime: "10 min",
  },
  {
    id: "apps_menstruais_start",
    title: "Monetização de Dados Íntimos",
    description:
      "A pressão por receita encontra a ética da privacidade. Como lidar com data brokers interessados em ciclos biológicos?",
    icon: Smartphone,
    category: "Privacidade",
    difficulty: "Iniciante",
    estimatedTime: "8 min",
  },
  // Exemplo de futuro cenário para mostrar a paginação funcionando (placeholder)
  {
    id: "algoritmo_vies_start",
    title: "Viés em Crédito Bancário",
    description:
      "Seu modelo de IA recusa crédito desproporcionalmente para minorias. O que você faz? (Em breve)",
    icon: BrainCircuit,
    category: "Algoritmos",
    difficulty: "Avançado",
    estimatedTime: "15 min",
  },
];
