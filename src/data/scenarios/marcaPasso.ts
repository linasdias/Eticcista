import { StoryNode } from "@/data/storyNode";

const HISTORIA_REAL_MARCAPASSO = `
---

**📚 A História Real (2016-2017): O Caso Abbott/St. Jude**

Independentemente do seu caminho nesta simulação, o caso real foi marcado por negação corporativa e riscos sistêmicos.

* **O Alerta:** Em 2016, a empresa de segurança **MedSec** e a firma de investimentos **Muddy Waters** revelaram vulnerabilidades críticas em marcapassos da St. Jude Medical (depois adquirida pela Abbott).
* **A Falha:** Os dispositivos usavam comunicação RF sem autenticação adequada, permitindo drenagem de bateria e choques remotos.
* **A Reação:** A empresa processou os pesquisadores e negou as falhas por meses.
* **O Desfecho:** Em 2017, a **FDA** confirmou os riscos, forçando uma atualização de firmware para **465.000 pacientes**.

**🔗 Fontes para aprofundamento:**
* [Matéria do The Guardian](https://www-theguardian-com.translate.goog/technology/2017/aug/31/hacking-risk-recall-pacemakers-patient-death-fears-fda-firmware-update?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc)
`;

export const marcapassoNodes: Record<string, StoryNode> = {
  // --- TRECHO 1: CONTEXTO ---
  marcapasso_start: {
    id: "marcapasso_start",
    title: "O Pulso Invisível: Contexto Inicial",
    type: "intro",
    description: `
**O Dispositivo e a Promessa**

A Abbott/St. Jude Medical lança um novo modelo de marcapasso conectado via radiofrequência (RF). As funcionalidades principais incluem:

* Transmitir dados cardíacos remotamente para monitoramento contínuo.
* Capacidade de receber atualizações de firmware sem necessidade de intervenção cirúrgica.
* Permissão para que cardiologistas ajustem parâmetros do dispositivo à distância.

A promessa da empresa é clara: aumentar a segurança do paciente, reduzir a necessidade de cirurgias invasivas e garantir um acompanhamento médico constante. No entanto, existe um problema latente na arquitetura do sistema: o firmware não exige autenticação forte para a execução de comandos críticos.

---

**A Decisão de Engenharia**

A equipe de engenharia está reunida para definir a arquitetura final do firmware. O projeto enfrenta atrasos significativos e o departamento comercial exerce forte pressão sobre a equipe técnica:

> "Precisamos lançar este produto antes da concorrência para garantir nossa fatia de mercado."

Diante desse cenário, duas abordagens são colocadas na mesa para decisão. Qual caminho você escolhe seguir?
    `,
    choices: [
      {
        id: "mp_seguranca",
        text: "**(A) Priorizar a Segurança:** Implementar autenticação forte e criptografia, aceitando um atraso de 3 a 6 meses no lançamento e o aumento dos custos de desenvolvimento.",
        nextNodeId: "marcapasso_final_bom",
        impact: { ethics: 10, tech: 10, social: 10 },
        feedback: `
**Análise da Decisão:**

Ao optar pela implementação de autenticação forte, o dispositivo fica protegido contra reprogramações maliciosas e acessos não autorizados.

**Perspectiva do Feminismo de Dados:**

* A escolha pela segurança beneficia todos os usuários, mas tem um impacto especialmente positivo sobre mulheres idosas, que constituem o grupo majoritário entre usuárias de marcapasso e frequentemente dependem de terceiros para decisões médicas.

* Essa medida reduz o risco de responsabilizar as usuárias por falhas técnicas (o argumento de "você usou errado"), uma prática comum em contextos médicos onde o viés de gênero pode influenciar o diagnóstico e o tratamento.
        `,
      },
      {
        id: "mp_rapido",
        text: "**(B) Priorizar o Prazo:** Manter a autenticação mínima para cumprir o cronograma e liberar o produto imediatamente.",
        nextNodeId: "marcapasso_relatos",
        impact: { ethics: 2, tech: 3, social: 1 },
        feedback: `
**Contexto Real:**

Esta foi a escolha feita na realidade. A decisão foi motivada pela necessidade de cumprir o cronograma, priorizar o "time-to-market" e atender à pressão dos acionistas.

**Impacto Negativo:**

* A falta de autenticação permite que um atacante pare o coração do paciente enviando pulsos errados.
* Também é possível drenar a bateria do dispositivo, levando à falha súbita e necessidade de cirurgia de emergência.

**Perspectiva do Feminismo de Dados:**

Decisões tomadas por equipes majoritariamente masculinas, sem considerar as implicações éticas nas vidas de mulheres (que muitas vezes têm menos voz nas consultas médicas). A falta de representatividade na equipe de desenvolvimento leva à minimização de riscos que afetam desproporcionalmente grupos vulneráveis.
        `,
      },
    ],
  },

  // --- TRECHO 2: RELATOS ---
  marcapasso_relatos: {
    id: "marcapasso_relatos",
    title: "Relatos de Usuárias",
    type: "dilemma",
    description: `
**Os Primeiros Sinais**

Após o lançamento, usuárias (principalmente mulheres acima de 60 anos) começam a entrar em contato com o suporte técnico relatando anomalias:

* Choques irregulares.
* Sensação de batimento cardíaco acelerado.
* Falhas intermitentes no transmissor remoto.

**A Resposta Institucional**

O suporte técnico, seguindo protocolos padrão, oferece respostas como:

> "Isso deve ser ansiedade."
> "É apenas estresse."
> "Talvez sejam sintomas da menopausa."

Esse padrão de resposta é documentado na literatura médica: sintomas reportados por mulheres tendem a ser subestimados ou psicologizados clinicamente. Como você procede diante desses relatos?
    `,
    choices: [
      {
        id: "mp_investigar",
        text: "**(A) Investigar Tecnicamente:** Tratar os relatos como potenciais falhas técnicas e iniciar uma investigação profunda imediatamente.",
        nextNodeId: "marcapasso_final_medio",
        impact: { ethics: 8, tech: 7, social: 9 },
        feedback: `
**Resultado:**

A vulnerabilidade é descoberta internamente antes de causar uma catástrofe pública.

**Perspectiva do Feminismo de Dados:**

* Levar a sério os relatos de mulheres rompe o ciclo de "medical gaslighting" (abuso psicológico médico), onde a percepção da paciente sobre seu próprio corpo é deslegitimada.

* Melhora a qualidade geral do produto, pois o feedback real de usuárias alimenta os modelos de teste e validação.
        `,
      },
      {
        id: "mp_ignorar",
        text: "**(B) Manter o Protocolo:** Classificar os relatos como 'erro do usuário' ou questões fisiológicas não relacionadas ao dispositivo.",
        nextNodeId: "marcapasso_pesquisa",
        impact: { ethics: 1, tech: 1, social: 0 },
        feedback: `
**Contexto Real:**

Foi o que aconteceu na prática. Os relatos foram ignorados ou minimizados.

**Impacto:**

* A falha de segurança continuou oculta por meses.
* Mais dispositivos vulneráveis foram implantados em pacientes.
* A empresa evitou custos imediatos de investigação, mas aumentou drasticamente o risco sistêmico.

**Perspectiva do Feminismo de Dados:**

Essa atitude invisibiliza o fato de que grande parte dos usuários mais vulneráveis são mulheres idosas. Reforça a lógica corporativa de priorizar métricas financeiras sobre vidas humanas — especialmente de grupos cujas vozes são menos ouvidas.
        `,
      },
    ],
  },

  // --- TRECHO 3: PESQUISA ---
  marcapasso_pesquisa: {
    id: "marcapasso_pesquisa",
    title: "A Descoberta da Vulnerabilidade",
    type: "dilemma",
    description: `
**Evidência Técnica Independente**

Pesquisadores independentes de segurança (MedSec) analisam o dispositivo e encontram falhas críticas:

* É possível conectar-se ao marcapasso via RF sem qualquer autenticação.
* Um atacante pode alterar a frequência dos pulsos e drenar a bateria.
* É possível enviar comandos para aplicar choques errados, podendo induzir fibrilação ventricular e levar à morte.

Eles entram em contato para alertar a empresa sobre a gravidade da situação. Qual é a sua postura institucional?
    `,
    choices: [
      {
        id: "mp_cooperar",
        text: "**(A) Resposta Ética:** Agradecer a pesquisa, instituir um programa de bug bounty e trabalhar na correção da falha.",
        nextNodeId: "marcapasso_final_medio",
        impact: { ethics: 6, tech: 5, social: 7 },
        feedback: `
**Resultado:**

Uma abordagem cooperativa e rápida reduz o impacto negativo e o custo de um eventual recall.

**Perspectiva do Feminismo de Dados:**

* Uma resposta transparente cria confiança, especialmente com grupos historicamente ignorados pela medicina.

* Reconhece o valor da pesquisa externa e independente, uma área dominada por homens, mas crucial para a equidade e segurança de todos.
        `,
      },
      {
        id: "mp_atacar",
        text: "**(B) Resposta Defensiva:** Desacreditar os pesquisadores e negar a existência do problema.",
        nextNodeId: "marcapasso_final_ruim",
        impact: { ethics: 0, tech: 0, social: -5 },
        feedback: `
**Contexto Real:**

Foi a estratégia adotada pela empresa inicialmente. Tentaram desqualificar a pesquisa e negar os riscos.

**Impacto:**

* A discussão ganhou as manchetes e investigações oficiais foram iniciadas.
* A falha tornou-se mundialmente conhecida.
* O atraso na admissão do problema postergou a correção da vulnerabilidade.

**Perspectiva do Feminismo de Dados:**

Desconsiderar vulnerabilidades afeta mais gravemente os grupos que dependem do dispositivo e não possuem "agência técnica" para mitigar os riscos. Mulheres idosas de baixa renda são as mais prejudicadas quando empresas postergam correções por interesse próprio.
        `,
      },
    ],
  },

  // --- FINAIS ---

  marcapasso_final_bom: {
    id: "marcapasso_final_bom",
    title: "Conclusão: Decisões Éticas desde o Princípio",
    type: "ending",
    description: `
**Resultado da Escolha pela Segurança**

* Autenticação forte foi implementada desde o lançamento.
* As usuárias foram ouvidas e seus relatos levados a sério.
* Testes amplos incluíram diversidade de corpos e cenários.

**Resultado:** Recall evitado e zero mortes relacionadas à falha de segurança.

A empresa estabeleceu-se como referência de ética em Internet dos Corpos (IoB). A comunidade médica confia na tecnologia e o produto ganhou mercado e respeito por sua robustez e segurança.

${HISTORIA_REAL_MARCAPASSO}
    `,
    choices: [],
  },

  marcapasso_final_medio: {
    id: "marcapasso_final_medio",
    title: "Conclusão: Gestão de Crise",
    type: "ending",
    description: `
**Resultado da Intervenção Tardia**

Você evitou o pior cenário, mas a um custo elevado.

Ao ouvir os relatos (seja das usuárias ou dos pesquisadores) antes do colapso total, vidas foram salvas. No entanto, houve um custo significativo de imagem e financeiro para corrigir a falha em produtos já comercializados. A transparência evitou o desastre completo, mas a confiança na marca foi abalada.

${HISTORIA_REAL_MARCAPASSO}
    `,
    choices: [],
  },

  marcapasso_final_ruim: {
    id: "marcapasso_final_ruim",
    title: "Conclusão: O Coração Silencioso",
    type: "ending",
    description: `
**O Desfecho Histórico**

A negação do problema não se sustentou. A FDA (Food and Drug Administration) interveio e confirmou as vulnerabilidades, obrigando a Abbott/St. Jude a emitir um recall massivo.

* Mais de **400.000 marcapassos** vulneráveis precisaram de atualização.
* Houve risco real de interrupção do funcionamento dos dispositivos.
* O procedimento de atualização exigia que os pacientes fossem fisicamente aos hospitais, expondo-os a riscos, custos e dificuldades de deslocamento.

**Quem mais sofreu?**

Mulheres idosas, residentes de áreas rurais e pessoas de baixa renda, muitas vezes dependentes de transporte de terceiros.

---

**Análise Geral sob a ótica do Feminismo de Dados**

1. **Invisibilidade das usuárias:** O feedback de mulheres idosas foi desconsiderado sistematicamente até que a situação se tornasse uma crise pública.

2. **Falta de diversidade nas equipes:** Modelos mentais homogêneos na engenharia e gestão levaram a um produto mal avaliado em cenários reais de uso e risco.

3. **Desigualdade de Poder:** A falha tecnológica ampliou desigualdades sociais e de gênero preexistentes. Uma vulnerabilidade técnica afeta desproporcionalmente quem tem menos recursos para lidar com as consequências.

${HISTORIA_REAL_MARCAPASSO}
    `,
    choices: [],
  },
};
