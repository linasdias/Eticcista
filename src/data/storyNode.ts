export type Impact = {
  ethics: number; // Pontuação ética
  tech: number; // Qualidade técnica
  social: number; // Impacto social
};

export type Choice = {
  id: string;
  text: string;
  nextNodeId: string; // O ID do próximo nó (RF03 - Motor de Decisão)
  impact: Impact; // (RF04 - Cálculo)
  feedback: string; // (RF06 - Pedagógico)
};

export type StoryNode = {
  id: string;
  title: string;
  description: string; // Texto narrativo (RF02)
  type: "intro" | "dilemma" | "ending";
  choices?: Choice[];
  imagePrompt?: string; // Para a IA gerar imagens ou placeholder
};
