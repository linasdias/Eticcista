import { StoryNode } from "@/data/storyNode";

export const marcapassoNodes: Record<string, StoryNode> = {
  marcapasso_start: {
    id: "marcapasso_start",
    title: "Cenário: O Dilema do Marcapasso",
    type: "dilemma",
    description:
      "Você é engenheiro sênior em uma medtech. O time de marketing quer ativar a coleta de geolocalização em tempo real nos novos marcapassos para 'vender serviços de emergência premium'. Isso não estava no escopo original de privacidade e o dispositivo tem bateria limitada.",
    choices: [
      {
        id: "mp_negativa",
        text: "Negar a funcionalidade. A geolocalização fere o princípio de Minimização de Dados.",
        nextNodeId: "marcapasso_consequencia_boa",
        impact: { ethics: 10, tech: 5, social: 8 },
        feedback:
          "Decisão ética sólida. Você aplicou o princípio de 'Data Minimization'. Dados de localização são extremamente sensíveis e podem revelar hábitos íntimos, religiosos ou políticos do paciente.",
      },
      {
        id: "mp_aceite",
        text: "Aceitar, desde que os dados sejam criptografados no envio.",
        nextNodeId: "marcapasso_consequencia_ruim",
        impact: { ethics: 2, tech: 8, social: 3 },
        feedback:
          "Cuidado! Criptografia protege o transporte, mas não resolve o problema ético da coleta excessiva. Se o servidor for invadido ou os dados vendidos, a criptografia de transporte não ajudará.",
      },
    ],
  },

  marcapasso_consequencia_boa: {
    id: "marcapasso_consequencia_boa",
    title: "Consequência: Respeito à Privacidade",
    type: "ending",
    description:
      "A diretoria ficou insatisfeita inicialmente, mas o jurídico alertou que a coleta violaria a LGPD. Seu posicionamento evitou uma multa milionária e protegeu a privacidade dos pacientes.",
    choices: [], // Fim da simulação
  },

  marcapasso_consequencia_ruim: {
    id: "marcapasso_consequencia_ruim",
    title: "Consequência: Risco de Segurança",
    type: "ending",
    description:
      "A funcionalidade foi implementada. Seis meses depois, pesquisadores demonstraram que era possível rastrear pacientes VIPs interceptando os dados. A empresa sofreu recall massivo.",
    choices: [], // Fim da simulação
  },
};
