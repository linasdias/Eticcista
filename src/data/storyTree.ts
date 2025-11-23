import { StoryNode } from "@/data/storyNode";

export const storyNodes: Record<string, StoryNode> = {
  // --- CENÁRIO 1: O CASO DO MARCAPASSO ---
  marcapasso_start: {
    id: "marcapasso_start",
    title: "Cenário 1: O Dilema do Marcapasso",
    type: "dilemma",
    description:
      "Você é engenheiro sênior em uma medtech. O time de marketing quer ativar a coleta de geolocalização em tempo real nos novos marcapassos para 'vender serviços de emergência premium'. Isso não estava no escopo original de privacidade e o dispositivo tem bateria limitada.",
    choices: [
      {
        id: "mp_negativa",
        text: "Negar a funcionalidade. A geolocalização fere o princípio de Minimização de Dados.",
        nextNodeId: "marcapasso_consequencia_boa", // Vai para desfecho positivo
        impact: { ethics: 10, tech: 5, social: 8 },
        feedback:
          "Decisão ética sólida. Você aplicou o princípio de 'Data Minimization'. Dados de localização são extremamente sensíveis e podem revelar hábitos íntimos, religiosos ou políticos do paciente.",
      },
      {
        id: "mp_aceite",
        text: "Aceitar, desde que os dados sejam criptografados no envio.",
        nextNodeId: "marcapasso_consequencia_ruim", // Vai para desfecho negativo
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
      "A diretoria ficou insatisfeita inicialmente, mas o jurídico alertou que a coleta violaria a LGPD/GDPR. Seu posicionamento evitou uma multa milionária futura.",
    // Aponta para o início do próximo cenário
    choices: [
      {
        id: "prox_cenario",
        text: "Ir para o próximo caso",
        nextNodeId: "apps_menstruais_start",
        impact: { ethics: 0, tech: 0, social: 0 },
        feedback: "",
      },
    ],
  },

  marcapasso_consequencia_ruim: {
    id: "marcapasso_consequencia_ruim",
    title: "Consequência: Risco de Segurança",
    type: "ending",
    description:
      "A funcionalidade foi implementada. Seis meses depois, pesquisadores de segurança demonstraram que era possível rastrear pacientes VIPs interceptando os dados do marcapasso. A empresa sofreu recall.",
    choices: [
      {
        id: "prox_cenario",
        text: "Tentar recuperar no próximo caso",
        nextNodeId: "apps_menstruais_start",
        impact: { ethics: 0, tech: 0, social: 0 },
        feedback: "",
      },
    ],
  },

  // --- CENÁRIO 2: APPS MENSTRUAIS (HAPPN/FLO) ---
  apps_menstruais_start: {
    id: "apps_menstruais_start",
    title: "Cenário 2: Monetização de Dados Íntimos",
    type: "dilemma",
    description:
      "Você é Product Owner de um app de monitoramento de ciclo menstrual. A receita de assinaturas estagnou. Um data broker oferece comprar dados 'anonimizados' de humor e ciclo para que anunciantes direcionem remédios para cólica e TPM.",
    choices: [
      {
        id: "app_vender",
        text: "Integro o SDK de anúncios. Os dados são anonimizados e isso mantém o app grátis.",
        nextNodeId: "apps_menstruais_ruim",
        impact: { ethics: 0, tech: 5, social: 0 },
        feedback:
          "Erro crítico. Estudos mostram que dados espaço-temporais e de saúde são facilmente re-identificáveis. Vender dados de saúde reprodutiva coloca mulheres em risco, especialmente em jurisdições onde o aborto é criminalizado.",
      },
      {
        id: "app_recusar",
        text: "Recuso a venda. Dados de saúde reprodutiva são sagrados e não devem ser comoditizados.",
        nextNodeId: "apps_menstruais_bom",
        impact: { ethics: 10, tech: 0, social: 10 },
        feedback:
          "Excelente. Você protegeu a integridade contextual dos dados. Apps como o Flo foram investigados pelo FTC justamente por prometer privacidade e compartilhar dados com Facebook/Google.",
      },
    ],
  },

  apps_menstruais_bom: {
    id: "apps_menstruais_bom",
    title: "Consequência: Confiança do Usuário",
    type: "ending",
    description:
      "Você lançou um manifesto de privacidade. A base de usuários cresceu 40% por recomendação boca-a-boca devido à confiança na plataforma.",
    choices: [], // Fim da demo por enquanto
  },

  apps_menstruais_ruim: {
    id: "apps_menstruais_ruim",
    title: "Consequência: Escândalo e Multa",
    type: "ending",
    description:
      "O caso vazou na imprensa. A agência reguladora (FTC/ANPD) abriu inquérito. A reputação da marca foi destruída.",
    choices: [], // Fim da demo por enquanto
  },
};
