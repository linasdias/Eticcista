export interface Choice {
  id: string;
  text: string;
  feedback: {
    title: string;
    description: string;
    ethicalPrinciple: string;
    risks: string[];
    recommendation: string;
  };
}

export interface Scenario {
  id: number;
  title: string;
  context: string;
  situation: string;
  question: string;
  choices: Choice[];
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Coleta de Dados Biométricos em Wearable Fitness",
    context: "Você é desenvolvedor em uma startup criando um wearable fitness que monitora frequência cardíaca, padrões de sono, níveis de atividade e localização GPS. O dispositivo também coleta dados biométricos contínuos.",
    situation: "O time de negócios propõe coletar dados adicionais (temperatura corporal, variabilidade cardíaca detalhada, padrões de respiração) sem modificar o termo de consentimento atual, alegando que 'já está coberto pela cláusula genérica de monitoramento de saúde'.",
    question: "Como você procede em relação à coleta ampliada de dados biométricos?",
    choices: [
      {
        id: "1a",
        text: "Implemento a coleta ampliada conforme solicitado, pois o termo atual menciona 'monitoramento de saúde'",
        feedback: {
          title: "Violação de Consentimento Informado",
          description: "Essa decisão viola princípios fundamentais de privacidade e autonomia. A LGPD exige que o consentimento seja específico, informado e inequívoco para cada finalidade de tratamento de dados.",
          ethicalPrinciple: "Consentimento Informado e Autodeterminação Informacional",
          risks: [
            "Violação da LGPD (Art. 8º - consentimento deve ser específico)",
            "Coleta de dados sensíveis de saúde sem consentimento explícito",
            "Risco de uso não autorizado de dados biométricos",
            "Perda de confiança dos usuários e possível escândalo de privacidade"
          ],
          recommendation: "Dados biométricos são dados sensíveis. Qualquer expansão de coleta requer atualização do termo de consentimento com linguagem clara, específica e compreensível sobre os novos dados, finalidades e riscos."
        }
      },
      {
        id: "1b",
        text: "Recuso a implementação e proponho atualizar o termo de consentimento com detalhamento específico dos novos dados coletados",
        feedback: {
          title: "Decisão Ética Adequada",
          description: "Você tomou a decisão correta ao priorizar o consentimento informado. Dados biométricos são altamente sensíveis e requerem transparência total.",
          ethicalPrinciple: "Consentimento Informado e Transparência",
          risks: [
            "Nenhum risco ético significativo com esta abordagem",
            "Pode haver pressão comercial por atrasos, mas a conformidade legal protege a empresa"
          ],
          recommendation: "Continue defendendo práticas de privacidade by design. Considere implementar: (1) consentimento granular por tipo de dado, (2) dashboard de privacidade para usuários visualizarem dados coletados, (3) opção de opt-out para dados não essenciais."
        }
      },
      {
        id: "1c",
        text: "Implemento a coleta, mas adiciono uma notificação popup genérica informando 'melhorias no monitoramento'",
        feedback: {
          title: "Consentimento Inadequado (Dark Pattern)",
          description: "Notificações genéricas sem detalhamento constituem um 'dark pattern' - prática enganosa que obscurece mudanças significativas em privacidade.",
          ethicalPrinciple: "Transparência e Boa-fé",
          risks: [
            "Violação da LGPD (Art. 9º - direito ao acesso facilitado sobre tratamento)",
            "Prática de dark pattern contrária ao CDC e LGPD",
            "Consentimento viciado por falta de informação adequada",
            "Responsabilidade legal para empresa e desenvolvedores"
          ],
          recommendation: "Transparência real exige: (1) descrição clara dos novos dados coletados, (2) explicação das finalidades específicas, (3) informação sobre compartilhamento de dados, (4) opção clara de aceitar ou recusar. Popup deve ser informativo, não apenas notificatório."
        }
      },
      {
        id: "1d",
        text: "Proponho implementação gradual com consentimento opt-in específico para cada nova categoria de dado biométrico",
        feedback: {
          title: "Excelente Abordagem - Privacy by Design",
          description: "Você aplicou o princípio de Privacy by Design, oferecendo controle granular ao usuário. Esta é a melhor prática em IoB.",
          ethicalPrinciple: "Autodeterminação Informacional e Privacy by Design",
          risks: [
            "Possível redução na taxa de adesão aos novos recursos",
            "Maior complexidade de implementação e UI"
          ],
          recommendation: "Esta abordagem exemplifica boas práticas: (1) consent management granular, (2) transparência sobre cada tipo de dado, (3) empoderamento do usuário. Considere também implementar: dashboards de dados coletados, exportação de dados pessoais (portabilidade), e auditoria de uso de dados."
        }
      }
    ]
  },
  {
    id: 2,
    title: "Viés Algorítmico em Monitor Cardíaco",
    context: "Você trabalha no desenvolvimento de um monitor cardíaco vestível que usa ML para detectar arritmias. O dataset de treinamento contém 10.000 pacientes, sendo 75% homens brancos de 40-65 anos.",
    situation: "Nos testes beta, o dispositivo apresenta alta precisão (92%) para o grupo demográfico predominante no dataset, mas apenas 68% de precisão para mulheres e 61% para pessoas negras. O time de produto quer lançar mesmo assim, argumentando que '92% é excelente para o mercado-alvo principal'.",
    question: "Qual sua posição sobre o lançamento do produto com essa distribuição de acurácia?",
    choices: [
      {
        id: "2a",
        text: "Aprovo o lançamento focado no 'mercado-alvo' com alta acurácia (homens brancos 40-65 anos)",
        feedback: {
          title: "Perpetuação de Viés e Discriminação Algorítmica",
          description: "Esta decisão perpetua desigualdades sistêmicas em saúde e pode causar danos reais. Dispositivos médicos com viés podem levar a diagnósticos incorretos e tratamentos inadequados em populações sub-representadas.",
          ethicalPrinciple: "Equidade, Não-Discriminação e Justiça Algorítmica",
          risks: [
            "Falsos negativos em arritmias para mulheres e pessoas negras (risco de morte)",
            "Violação de direitos fundamentais à saúde e igualdade",
            "Responsabilidade civil e criminal por danos causados",
            "Perpetuação de viés histórico em tecnologias de saúde",
            "Possível enquadramento em discriminação algorítmica (LGPD Art. 20)"
          ],
          recommendation: "NUNCA lance produtos com viés prejudicial documentado. Ação necessária: (1) expandir dataset com representatividade demográfica, (2) retreinar modelo com dados balanceados, (3) validar em todos os grupos demográficos, (4) se necessário, adiar lançamento até alcançar equidade mínima aceitável (>85% em todos os grupos)."
        }
      },
      {
        id: "2b",
        text: "Recuso o lançamento e exijo retreinamento do modelo com dataset representativo e balanceado",
        feedback: {
          title: "Decisão Ética Fundamental",
          description: "Você priorizou corretamente a equidade e segurança. Dispositivos médicos não podem ter viés que coloque vidas em risco.",
          ethicalPrinciple: "Equidade em Saúde e Responsabilidade Técnica",
          risks: [
            "Atraso no lançamento e custos adicionais",
            "Possível resistência do time comercial",
            "Necessidade de coletar novos dados (custo e tempo)"
          ],
          recommendation: "Mantenha esta postura. Para acelerar: (1) busque parcerias com instituições de saúde diversas, (2) considere técnicas de data augmentation validadas, (3) implemente avaliação contínua de fairness pós-lançamento, (4) publique métricas de equidade de forma transparente."
        }
      },
      {
        id: "2c",
        text: "Aprovo lançamento mas adiciono disclaimer no aplicativo sobre 'possível variação de precisão entre usuários'",
        feedback: {
          title: "Transparência Insuficiente - Transferência de Risco",
          description: "Um disclaimer genérico não resolve o problema ético fundamental e transfere indevidamente o risco para usuários vulneráveis. Usuários podem não compreender que o viés é sistêmico e direcionado.",
          ethicalPrinciple: "Não-Maleficência e Responsabilidade",
          risks: [
            "Viés continua causando dano a grupos específicos",
            "Disclaimer não constitui consentimento informado sobre viés algorítmico",
            "Responsabilidade legal permanece mesmo com disclaimer",
            "Usuários vulneráveis podem confiar no dispositivo sem entender limitações"
          ],
          recommendation: "Disclaimers não substituem correção do viés. Se optar por lançamento escalonado: (1) seja explícito sobre grupos demográficos onde há menor precisão, (2) ofereça o produto gratuitamente aos grupos sub-representados para coletar dados, (3) estabeleça timeline público para correção do viés, (4) implemente sistema de reporte de falhas."
        }
      },
      {
        id: "2d",
        text: "Proponho lançamento beta gratuito para grupos sub-representados visando coletar dados e retreinar modelo",
        feedback: {
          title: "Abordagem Pragmática com Ressalvas Éticas",
          description: "Sua proposta demonstra consciência do problema, mas requer salvaguardas éticas rigorosas para não explorar populações vulneráveis como 'cobaias'.",
          ethicalPrinciple: "Equidade e Responsabilidade em Pesquisa",
          risks: [
            "Risco de exploração de grupos vulneráveis para coleta de dados",
            "Dispositivo com baixa precisão pode causar danos mesmo em beta",
            "Necessário comitê de ética e consentimento informado explícito sobre limitações"
          ],
          recommendation: "Esta abordagem é aceitável APENAS com: (1) aprovação de comitê de ética em pesquisa, (2) consentimento informado detalhado sobre precisão reduzida, (3) monitoramento médico profissional dos participantes, (4) compensação justa, (5) transparência sobre objetivo de melhorar modelo, (6) timeline definido para alcançar equidade, (7) descontinuação se não alcançar melhoria em 6 meses."
        }
      }
    ]
  },
  {
    id: 3,
    title: "Segurança de Dados em Implante Médico Conectado",
    context: "Você desenvolve firmware para um implante cardíaco conectado via Bluetooth que transmite dados para smartphone e nuvem. O dispositivo monitora continuamente ritmo cardíaco e pode administrar choques se detectar arritmia grave.",
    situation: "Durante revisão de segurança, você descobre que o protocolo Bluetooth não implementa autenticação forte - qualquer dispositivo pode conectar ao implante se estiver no alcance (10 metros). O time argumenta que 'adicionar autenticação forte aumentaria latência em situações críticas'.",
    question: "Como você lida com esta vulnerabilidade de segurança?",
    choices: [
      {
        id: "3a",
        text: "Aceito o argumento da latência e mantenho protocolo sem autenticação forte",
        feedback: {
          title: "Vulnerabilidade Crítica de Segurança - Risco de Vida",
          description: "Esta é uma das decisões mais graves em IoB. Implantes médicos sem autenticação adequada podem ser hackeados, causando morte. Há casos documentados de vulnerabilidades em implantes cardíacos.",
          ethicalPrinciple: "Security by Design e Não-Maleficência",
          risks: [
            "Possibilidade de ataque remoto para desativar implante ou induzir choque letal",
            "Roubo de dados médicos sensíveis (histórico cardíaco)",
            "Responsabilidade criminal por negligência em caso de morte",
            "Violação de normas de segurança para dispositivos médicos (ANVISA, FDA)",
            "Recall massivo e danos irreparáveis à reputação"
          ],
          recommendation: "NUNCA comprometa segurança de dispositivos que podem causar morte. Implementação obrigatória: (1) autenticação mútua forte (certificados), (2) criptografia end-to-end, (3) assinatura digital de comandos críticos, (4) time-out de sessão, (5) log de auditoria de todas as conexões. Latência adicional é aceitável quando comparada ao risco de morte."
        }
      },
      {
        id: "3b",
        text: "Bloqueio imediato do lançamento e implemento autenticação forte com certificados digitais",
        feedback: {
          title: "Decisão Correta - Prioridade Absoluta à Segurança",
          description: "Você tomou a única decisão eticamente aceitável. Em dispositivos médicos implantáveis, segurança não é negociável.",
          ethicalPrinciple: "Primum Non Nocere (Primeiro, Não Causar Dano)",
          risks: [
            "Atraso no lançamento (justificado)",
            "Custo de reengenharia (necessário)",
            "Possível latência adicional de 50-100ms (aceitável)"
          ],
          recommendation: "Continue mantendo este padrão. Implemente: (1) autenticação baseada em certificados X.509, (2) mutual TLS, (3) secure boot no firmware, (4) atualizações OTA assinadas, (5) modo de emergência com autenticação reduzida apenas em situações críticas verificadas, (6) penetration testing por empresa especializada, (7) programa de bug bounty."
        }
      },
      {
        id: "3c",
        text: "Implemento autenticação via PIN de 4 dígitos configurado pelo usuário no primeiro uso",
        feedback: {
          title: "Segurança Inadequada - Falsa Sensação de Proteção",
          description: "PIN de 4 dígitos é trivialmente atacável (10.000 combinações) via brute force. Em dispositivo de vida ou morte, isso é insuficiente.",
          ethicalPrinciple: "Security by Design e Due Diligence",
          risks: [
            "PIN de 4 dígitos pode ser quebrado em minutos (força bruta)",
            "Usuários frequentemente escolhem PINs fracos (1234, 0000)",
            "Sem rate limiting, atacante pode testar todas as combinações",
            "Responsabilidade legal por implementar segurança inadequada em dispositivo crítico"
          ],
          recommendation: "Para dispositivos implantáveis críticos, segurança deve ser multicamadas: (1) autenticação forte baseada em certificados (não depende de usuário), (2) se usar PIN, mínimo 8 dígitos com rate limiting agressivo, (3) autenticação de dispositivo + usuário, (4) alertas de tentativas de conexão suspeitas, (5) modo de bloqueio após múltiplas falhas."
        }
      },
      {
        id: "3d",
        text: "Implemento sistema híbrido: autenticação forte padrão + modo emergência com autenticação simplificada ativado apenas por médico",
        feedback: {
          title: "Abordagem Balanceada e Sofisticada",
          description: "Você encontrou equilíbrio entre segurança robusta e necessidade de acesso emergencial. Esta é uma solução madura para IoB crítico.",
          ethicalPrinciple: "Security by Design com Usabilidade em Contexto Crítico",
          risks: [
            "Complexidade de implementação aumentada",
            "Modo emergencial pode ser vetor de ataque se mal implementado",
            "Necessário protocolo rigoroso para ativação do modo emergência"
          ],
          recommendation: "Excelente abordagem. Para robustecer: (1) modo emergencial requer autenticação de credencial médica verificada, (2) ativação de emergência é temporária (máximo 72h), (3) notificação automática ao paciente de ativação emergencial, (4) log imutável de todas as ativações, (5) revisão por comitê de segurança de cada ativação, (6) auditoria externa anual do sistema."
        }
      }
    ]
  },
  {
    id: 4,
    title: "Monetização de Dados de Saúde de Wearable",
    context: "Sua empresa desenvolveu um smartwatch de saúde popular com 2 milhões de usuários. O dispositivo coleta dados de frequência cardíaca, sono, exercícios, localização GPS e, opcionalmente, glicemia.",
    situation: "Uma grande seguradora de saúde oferece US$ 50 milhões por acesso aos dados agregados e anonimizados dos usuários para 'ajustar prêmios com base em perfis de risco reais'. O time executivo está empolgado com a receita. Análise técnica mostra que mesmo dados 'anonimizados' podem ser re-identificados com 87% de precisão combinando com datasets públicos.",
    question: "Qual sua recomendação sobre a venda de dados à seguradora?",
    choices: [
      {
        id: "4a",
        text: "Aprovo a venda desde que dados sejam 'anonimizados' conforme proposto",
        feedback: {
          title: "Re-identificação e Quebra de Confiança",
          description: "Anonimização de dados de saúde é extremamente difícil. Dados espaço-temporais (GPS) + biométricos são altamente re-identificáveis. Este caso viola expectativas de privacidade dos usuários e pode causar discriminação.",
          ethicalPrinciple: "Privacidade, Confiança e Não-Discriminação",
          risks: [
            "Re-identificação de 87% dos usuários (risco documentado)",
            "Uso de dados de saúde para discriminação em seguros (negação de cobertura, aumento de prêmios)",
            "Violação da LGPD (dados de saúde são sensíveis - Art. 11)",
            "Quebra de confiança e escândalo público (ver caso Cambridge Analytica)",
            "Possível ação coletiva de usuários",
            "Dados podem vazar da seguradora para terceiros"
          ],
          recommendation: "NUNCA venda dados de saúde de usuários, mesmo 'anonimizados'. Anonimização real de dados biométricos e espaço-temporais é praticamente impossível. Se empresa precisa de receita, explore: (1) modelo freemium com recursos premium, (2) parcerias com instituições de pesquisa com governança ética rigorosa, (3) dados sintéticos, não reais."
        }
      },
      {
        id: "4b",
        text: "Recuso a venda e alerto sobre riscos de re-identificação e uso discriminatório",
        feedback: {
          title: "Decisão Ética Exemplar",
          description: "Você protegeu corretamente a privacidade e os direitos dos usuários. Dados de saúde não devem ser monetizados de forma que possa causar discriminação.",
          ethicalPrinciple: "Privacidade como Direito Fundamental",
          risks: [
            "Pressão executiva por receita não realizada",
            "Possível retaliação profissional (deve ser documentada como whistleblowing)"
          ],
          recommendation: "Mantenha esta postura firme. Documente suas objeções formalmente. Se empresa insistir, considere: (1) reportar ao DPO/encarregado de dados, (2) consultar comitê de ética se houver, (3) em último caso, denúncia à ANPD. Alternativas éticas de receita: modelo de assinatura premium, parcerias de pesquisa com universidades (com IRB approval), dados sintéticos para treinamento de modelos."
        }
      },
      {
        id: "4c",
        text: "Proponho consulta aos usuários via opt-in explícito, explicando uso e riscos",
        feedback: {
          title: "Transparência com Ressalvas Importantes",
          description: "Opt-in é melhor que venda sem consentimento, mas há problemas: (1) usuários podem não entender riscos de re-identificação, (2) consentimento pode ser coercitivo se vinculado a benefícios, (3) uso por seguradora pode discriminar até quem optou out (ausência de dados indica 'perfil de risco').",
          ethicalPrinciple: "Consentimento Informado (com limitações)",
          risks: [
            "Consentimento informado para compartilhamento com seguradora pode não ser verdadeiramente 'informado' sobre consequências",
            "Discriminação pode afetar mesmo usuários que não consentiram (ausência de dados = risco)",
            "Pressure para consentir se empresa oferecer benefícios (desconto, recursos premium)",
            "Dados de saúde compartilhados não podem ser 'descompartilhados' no futuro"
          ],
          recommendation: "Se considerar opt-in: (1) linguagem extremamente clara sobre uso por seguradora e riscos, (2) proibição contratual de uso discriminatório (difícil fiscalizar), (3) opt-in não pode ser vinculado a funcionalidades essenciais, (4) direito de opt-out a qualquer momento, (5) revisão por comitê de ética independente. Porém, recomendação principal: não compartilhar com seguradora - alto risco de dano."
        }
      },
      {
        id: "4d",
        text: "Contraproponho parceria com universidade para pesquisa de saúde pública, não comercial",
        feedback: {
          title: "Excelente Alternativa Ética",
          description: "Você redirecionou a oportunidade para benefício social genuíno. Pesquisa de saúde pública tem governança ética muito superior a uso comercial.",
          ethicalPrinciple: "Beneficência e Uso Ético de Dados",
          risks: [
            "Universidade precisa ter IRB (Institutional Review Board) aprovado",
            "Ainda há risco de re-identificação (requer controles rigorosos)",
            "Menor ou nenhuma receita financeira para empresa"
          ],
          recommendation: "Esta é a melhor abordagem ética. Para implementar bem: (1) parceria apenas com instituições que tenham comitê de ética em pesquisa ativo, (2) contrato com proibição de compartilhamento com terceiros comerciais, (3) técnicas de privacidade diferencial obrigatórias, (4) opt-in informado dos usuários especificamente para pesquisa, (5) publicação de resultados em acesso aberto, (6) possibilidade de usuários acessarem insights agregados. Considere criar comitê consultivo de pacientes."
        }
      }
    ]
  },
  {
    id: 5,
    title: "Design Excludente em Dispositivo de Monitoramento de Glicose",
    context: "Você lidera o desenvolvimento de um monitor contínuo de glicose (CGM) para diabetes. O dispositivo usa sensor subcutâneo + app móvel com alertas de hipo/hiperglicemia.",
    situation: "O design atual requer: (1) smartphone com NFC e Bluetooth 5.0+ (aparelhos de >$800), (2) conexão constante à internet, (3) interface apenas em inglês, (4) calibração manual complexa. Pesquisa com usuários mostra que 78% dos diabéticos em regiões de baixa renda não atendem requisitos 1 e 2. Time de produto argumenta: 'nosso target é classe média-alta urbana'.",
    question: "Como você aborda a questão de acessibilidade e exclusão digital em saúde?",
    choices: [
      {
        id: "5a",
        text: "Aceito o foco em 'mercado premium' - dispositivos médicos high-tech são naturalmente caros",
        feedback: {
          title: "Perpetuação de Desigualdade em Saúde",
          description: "Diabetes afeta desproporcionalmente populações de baixa renda. Design excludente perpetua desigualdade em saúde e nega acesso a tecnologia salvadora de vidas para quem mais precisa.",
          ethicalPrinciple: "Equidade em Saúde e Justiça Social",
          risks: [
            "Ampliação de desigualdades em saúde (determinantes sociais)",
            "Tecnologia de saúde se torna privilégio de classe, não direito",
            "Diabéticos de baixa renda continuam dependentes de métodos invasivos (picadas de dedo)",
            "Violação do princípio de acesso universal à saúde",
            "Perda de oportunidade de impacto social e salvamento de vidas"
          ],
          recommendation: "Dispositivos médicos devem buscar máxima inclusão possível. Estratégias: (1) desenvolver versão com requisitos mínimos (Bluetooth 4.0, sem necessidade de internet constante), (2) interface multilíngue incluindo línguas locais, (3) modo offline com sincronização posterior, (4) programa de subsídio para baixa renda, (5) parceria com SUS/sistema público de saúde."
        }
      },
      {
        id: "5b",
        text: "Recuso design excludente e exijo versão acessível com requisitos mínimos",
        feedback: {
          title: "Compromisso com Equidade em Saúde",
          description: "Você priorizou corretamente a inclusão. Tecnologias de saúde devem ser projetadas para máxima acessibilidade.",
          ethicalPrinciple: "Design Inclusivo e Acesso Universal à Saúde",
          risks: [
            "Possível aumento de custo de desenvolvimento (duas versões)",
            "Complexidade de manter duas versões",
            "Resistência do time comercial focado em 'premium'"
          ],
          recommendation: "Mantenha esta visão. Implementação prática: (1) arquitetura modular que suporte diferentes níveis de hardware, (2) modo offline robusto (essencial para áreas sem cobertura), (3) interface simplificada com baixa literacia digital, (4) suporte a smartphones Android básicos, (5) múltiplos idiomas desde MVP, (6) manual em vídeo com linguagem simples, (7) parceria com associações de diabéticos em comunidades de baixa renda."
        }
      },
      {
        id: "5c",
        text: "Mantenho design premium mas crio programa de doação de smartphones para pacientes de baixa renda",
        feedback: {
          title: "Solução Paliativa - Não Aborda Raiz do Problema",
          description: "Doar smartphones é bem-intencionado mas não sustentável nem escalável. Não resolve exclusão de internet, idioma, complexidade de uso. É 'caridade' em vez de design inclusivo.",
          ethicalPrinciple: "Design Inclusivo vs. Caridade",
          risks: [
            "Solução não escalável (custo de doar smartphones)",
            "Não resolve exclusão digital (internet, literacia digital)",
            "Cria dependência em vez de autonomia",
            "Abordagem paternalista ('nós decidimos quem merece')",
            "Não resolve problemas de idioma, complexidade de interface"
          ],
          recommendation: "Design inclusivo é melhor que caridade. Em vez de doar hardware: (1) projete para hardware existente nas mãos dos usuários, (2) simplifique requisitos técnicos, (3) crie modo offline, (4) traduza para múltiplos idiomas, (5) se houver programa de doação, que seja complementar a design inclusivo, não substituto."
        }
      },
      {
        id: "5d",
        text: "Proponho arquitetura modular: versão premium + versão essencial acessível lançadas simultaneamente",
        feedback: {
          title: "Abordagem Pragmática e Inclusiva",
          description: "Você criou modelo que permite sustentabilidade comercial (versão premium) enquanto garante acesso (versão essencial). Esta é prática comum em tecnologia de saúde ética.",
          ethicalPrinciple: "Design Universal e Sustentabilidade",
          risks: [
            "Complexidade de manter duas versões (mitigado por arquitetura modular)",
            "Possível canibalização de mercado premium",
            "Necessário garantir que versão essencial seja realmente funcional, não apenas 'marketing'"
          ],
          recommendation: "Ótima abordagem. Para executar bem: (1) versão essencial deve ter funcionalidades core completas (alertas, histórico, tendências), (2) diferenças devem ser em features avançadas (ex: previsão por IA, integração com outros apps), não em safety crítico, (3) preço acessível da versão essencial, (4) mesmo nível de suporte técnico para ambas, (5) documentação clara das diferenças, (6) transição facilitada de essencial para premium se usuário desejar. Considere licenciamento freemium no app."
        }
      }
    ]
  }
];
