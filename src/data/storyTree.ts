// Exemplo prático para seu TCC
import { StoryNode } from "@/data/storyNode.ts";

export const storyNodes: Record<string, StoryNode> = {
  start: {
    id: "start",
    title: "O Caso do Marcapasso",
    type: "dilemma",
    description:
      "Você é engenheiro sênior em uma empresa de IoB. Um novo marcapasso está sendo lançado. O marketing quer coletar dados de geolocalização em tempo real para 'vender serviços de emergência premium'. Isso não estava no escopo inicial de privacidade.",
    choices: [
      {
        id: "c1",
        text: "Negar a funcionalidade. A geolocalização fere a privacidade do paciente.",
        nextNodeId: "rota_etica_pura",
        impact: { ethics: 10, tech: 5, social: 8 },
        feedback:
          "Excelente. Princípio de Minimização de Dados. Contudo, o marketing ficará furioso.",
      },
      {
        id: "c2",
        text: "Aceitar, mas criptografar os dados.",
        nextNodeId: "rota_tecnica_risco",
        impact: { ethics: 5, tech: 10, social: 2 },
        feedback:
          "Cuidado. Criptografia não resolve o problema ético da coleta excessiva (Data Feminism: Quem detém o poder sobre os dados?).",
      },
    ],
  },
  rota_etica_pura: {
    id: "rota_etica_pura",
    title: "Consequência: Pressão Corporativa",
    description: "A diretoria ameaça cortar verbas do seu setor...",
    type: "dilemma",
    choices: [], // ... continua a árvore
  },
  // ... definir rota_tecnica_risco
};
