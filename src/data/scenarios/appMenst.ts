import { StoryNode } from "@/data/storyNode";

const HISTORIA_REAL_APPS = `
---

**📚 A História Real (2016-2022): O Caso Flo, Clue e Roe v. Wade**

A ficção reflete a realidade de dezenas de aplicativos populares.

* **O Escândalo Flo (2019-2021):** O app Flo (100M+ usuários) prometia manter dados privados, mas foi pego enviando logs de saúde para o Facebook. A FTC interveio.

* **A Queda de Roe v. Wade (2022):** Com a anulação do direito federal ao aborto nos EUA, dados de apps menstruais tornaram-se evidência criminal. Mulheres em estados restritivos começaram a apagar os apps em massa.

* **A Reação:** Apps como o Clue (baseado na Europa) reforçaram publicamente que seus dados estavam protegidos pela GDPR, enquanto outros venderam dados de localização para corretores que rastreavam visitas a clínicas de aborto.

**🔗 Fontes para aprofundamento:**

* [NPR: Why privacy experts are warning about period-tracking apps](https://www.npr.org/2022/05/10/1097482967/roe-v-wade-supreme-court-abortion-period-apps)
`;

export const appsMenstruaisNodes: Record<string, StoryNode> = {
  // --- TRECHO 1: O DESENVOLVIMENTO ---
  apps_menstruais_start: {
    id: "apps_menstruais_start",
    title: "O Ciclo Invisível: Contexto Inicial",
    type: "intro",
    description: `
**A Promessa dos Apps Menstruais**

Entre 2016 e 2022, dezenas de aplicativos menstruais cresceram rapidamente no mercado, prometendo:

* Prever fertilidade e acompanhar o ciclo.
* Ajudar quem tenta engravidar.
* Rastrear humor, dor e sintomas físicos.
* Oferecer "insights personalizados" de saúde.

Por trás da interface rosa e suave, muitos operavam com rastreamento invisível, ausência de criptografia e compartilhamento de dados com corretores (data brokers). Após decisões judiciais nos EUA sobre o aborto (Roe v. Wade), esses dados tornaram-se material de risco criminal.

---

**O Início do Desenvolvimento**

A equipe está planejando o MVP (Produto Mínimo Viável). O departamento de Marketing exige:

> "Precisamos de engajamento e retenção. Quanto mais dados coletarmos, melhor o modelo de previsão."

A equipe técnica apresenta dois caminhos para a arquitetura de dados. Qual você escolhe?
    `,
    choices: [
      {
        id: "app_seguranca",
        text: "**(A) Minimizar coleta e criptografar tudo:** Guardar somente o essencial no dispositivo do usuário, sem rastreadores ou redes de anúncios.",
        nextNodeId: "apps_menstruais_interface",
        impact: { ethics: 10, tech: 8, social: 10 },
        feedback: `
**Benefício Ético:**

Protege as usuárias mesmo em caso de vazamento de banco de dados ou solicitações de governos hostis.

**Feminismo de Dados:**

* Reconhece que corpos menstruantes sofrem maior risco de vigilância.

* Protege mulheres, pessoas trans e não binárias, especialmente as mais vulneráveis.

* Valoriza a autonomia sobre dados íntimos.
        `,
      },
      {
        id: "app_coleta",
        text: "**(B) Coletar tudo para monetização e ML:** Registrar datas, sintomas, histórico sexual e localização para alimentar modelos de Machine Learning e parcerias comerciais.",
        nextNodeId: "apps_menstruais_interface",
        impact: { ethics: 2, tech: 5, social: 1 },
        feedback: `
**Contexto Real:**

Foi o que muitos apps fizeram na vida real. Coletavam datas de menstruação, tentativas de engravidar, histórico sexual e humor, enviando automaticamente para Facebook Analytics e data brokers.

**Impacto Negativo:**

Transforma dados íntimos em mercadoria.

**Feminismo de Dados:**

Espoliação dos corpos femininos como "capital de vigilância". Redução da usuária à fonte de dados para lucro. Violência tecnológica disfarçada de autocuidado.
        `,
      },
    ],
  },

  // --- TRECHO 2: DESIGN E CONSENTIMENTO ---
  apps_menstruais_interface: {
    id: "apps_menstruais_interface",
    title: "Design da Interface e Consentimento",
    type: "dilemma",
    description: `
**A Promessa de Personalização**

O Marketing deseja "insights mágicos" e dashboards coloridos para o usuário. Para entregar isso, a especificação técnica exige:

* Tracking ativo de uso.
* Dados de engajamento.
* Construção de perfis psicológicos.

Algumas desenvolvedoras levantam preocupação sobre a privacidade dessas coletas. Como a interface deve solicitar o consentimento da usuária?
    `,
    choices: [
      {
        id: "app_transparencia",
        text: "**(A) Consentimento Claro:** Opções granulares e reversíveis. A usuária decide item por item o que compartilhar e pode apagar tudo.",
        nextNodeId: "apps_menstruais_roe",
        impact: { ethics: 9, tech: 6, social: 9 },
        feedback: `
**Impacto Positivo:**

Empodera as usuárias e aumenta a confiança na plataforma.

**Feminismo de Dados:**

* Reforça a autonomia corporal e digital.

* Respeita a diversidade de realidades: mulheres em situação de abuso, de risco, LGBTQIA+, imigrantes, etc.
        `,
      },
      {
        id: "app_darkpattern",
        text: "**(B) Termos Extensos e Interface Indutiva:** Usar botões de 'Aceitar Tudo' em destaque, opções de recusa escondidas e linguagem vaga.",
        nextNodeId: "apps_menstruais_roe",
        impact: { ethics: 1, tech: 4, social: 0 },
        feedback: `
**Contexto Real:**

Foi o que muitos apps fizeram. Botões gigantes de aceitação, opções de recusa ocultas e telemetria ligada por padrão.

**Impacto:**

As usuárias não entendiam que seus dados estavam sendo vendidos.

**Perspectiva Feminista:**

Consentimento não informado é violência de dados. Extrai informação de corpos marginalizados sem oferecer retorno social, reforçando o poder corporativo sobre o corpo feminino.
        `,
      },
    ],
  },

  // --- TRECHO 3: O COLAPSO (ROE V. WADE) ---
  apps_menstruais_roe: {
    id: "apps_menstruais_roe",
    title: "O Grande Colapso (2022)",
    type: "dilemma",
    description: `
**A Queda de Roe v. Wade**

Junho de 2022. O cenário jurídico muda drasticamente nos EUA. O aborto torna-se ilegal em diversos estados. Apps menstruais entram imediatamente na mira das autoridades:

* Promotores pedem dados para investigações de aborto.
* Policiais começam a usar dados de localização e ciclo para montar acusações.
* Mensagens entre parceiras e relatos de dor viram material criminal.

Alguns apps são flagrados entregando dados sem ordem judicial ou armazenando informações sensíveis em texto puro. Qual é a sua resposta à crise?
    `,
    choices: [
      {
        id: "app_proteger",
        text: "**(A) Responder com Ética:** Desabilitar tracking, criptografar tudo imediatamente e apagar dados antigos dos servidores.",
        nextNodeId: "apps_menstruais_bom",
        impact: { ethics: 10, tech: 5, social: 10 },
        feedback: `
**Final Bom:**

O app vira referência mundial de segurança reprodutiva.

**Feminismo de Dados:**

Protege especialmente mulheres pobres, negras (mais criminalizadas), mulheres em estados hostis à saúde reprodutiva e corpos trans e não-binários em constante vigilância.
        `,
      },
      {
        id: "app_entregar",
        text: "**(B) Proteger o Negócio:** Manter a coleta de dados e a arquitetura atual para não perder receita publicitária.",
        nextNodeId: "apps_menstruais_ruim",
        impact: { ethics: 0, tech: 2, social: -10 },
        feedback: `
**Contexto Real:**

Foi a realidade para vários apps.

**Impacto:**

* Dados usados para investigações criminais.
* Aumento de violência doméstica (parceiros monitorando ciclo via app).
* Reportagens denunciando práticas abusivas.

**Feminismo de Dados:**

Exposição sistemática de corpos vulneráveis. Vigilância reprodutiva como forma de controle social e patriarcal. Policiamento do corpo feminino através de código e publicidade.
        `,
      },
    ],
  },

  // --- FINAIS ---

  apps_menstruais_bom: {
    id: "apps_menstruais_bom",
    title: "Conclusão: O Ciclo Protegido",
    type: "ending",
    description: `
**🌿 Resultado Ético**

* Dados criptografados.
* Consentimento claro.
* Nada armazenado no servidor central.

**Consequência:**
As usuárias sentiram-se confiantes e seguras. O app tornou-se um "case" de ética em tecnologia. O impacto positivo para os direitos reprodutivos globais foi significativo.

${HISTORIA_REAL_APPS}
    `,
    choices: [],
  },

  apps_menstruais_ruim: {
    id: "apps_menstruais_ruim",
    title: "Conclusão: O Ciclo como Prova",
    type: "ending",
    description: `
**🔥 Desfecho Trágico (Baseado em Fatos)**

* Dados vendidos para anunciantes de fertilidade.
* Investigações policiais baseadas em logs de ciclo menstrual.
* Violência doméstica facilitada pelo rastreamento.
* Usuárias enganadas e expostas.

**A Realidade:**
Corporações lucraram com a vulnerabilidade reprodutiva. O ciclo menstrual virou uma arma de controle social.

---

**🌸 Conclusão sob o Feminismo de Dados**

**1. Exploração Histórica:** Dados íntimos de corpos femininos são historicamente explorados. Apps capturam emoções, sexualidade e saúde reprodutiva — áreas sempre alvo de vigilância patriarcal.

**2. Privacidade é Autonomia:** Vazamentos afetam principalmente quem pode engravidar, vive em regiões hostis ao aborto ou sofre opressão racial/econômica.

**3. Decisão Política:** Decisões técnicas são decisões políticas sobre corpos. Não criptografar dados é uma escolha que produz violência estrutural.

${HISTORIA_REAL_APPS}
    `,
    choices: [],
  },
};
