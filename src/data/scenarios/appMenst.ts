import { StoryNode } from "@/data/storyNode";

export const appsMenstruaisNodes: Record<string, StoryNode> = {
  apps_menstruais_start: {
    id: "apps_menstruais_start",
    title: "Cenário: Monetização de Dados Íntimos",
    type: "dilemma",
    description:
      "Você é Product Owner de um app de monitoramento menstrual. A receita estagnou. Um data broker oferece comprar dados 'anonimizados' de humor e ciclo para anunciantes direcionarem remédios.",
    choices: [
      {
        id: "app_vender",
        text: "Integro o SDK de anúncios. Os dados são anonimizados e isso mantém o app grátis.",
        nextNodeId: "apps_menstruais_ruim",
        impact: { ethics: 0, tech: 5, social: 0 },
        feedback:
          "Erro crítico. Estudos mostram que dados de saúde são facilmente re-identificáveis. Vender dados reprodutivos coloca mulheres em risco e viola a confiança contextual.",
      },
      {
        id: "app_recusar",
        text: "Recuso a venda. Dados de saúde reprodutiva são sensíveis e não devem ser comercializados.",
        nextNodeId: "apps_menstruais_bom",
        impact: { ethics: 10, tech: 0, social: 10 },
        feedback:
          "Excelente. Você protegeu a integridade dos dados. Apps como o Flo foram investigados justamente por prometer privacidade e compartilhar dados com terceiros.",
      },
    ],
  },

  apps_menstruais_bom: {
    id: "apps_menstruais_bom",
    title: "Consequência: Confiança do Usuário",
    type: "ending",
    description:
      "Você lançou um manifesto de privacidade. A base de usuários cresceu 40% por recomendação boca-a-boca devido à transparência e confiança na plataforma.",
    choices: [], // Fim da simulação
  },

  apps_menstruais_ruim: {
    id: "apps_menstruais_ruim",
    title: "Consequência: Escândalo e Multa",
    type: "ending",
    description:
      "O caso vazou na imprensa. A agência reguladora (ANPD/FTC) abriu inquérito e aplicou multa milionária. A reputação da marca foi destruída.",
    choices: [], // Fim da simulação
  },
};
