# EtiCCista - Simulador Educacional de Ética em Desenvolvimento

Um simulador interativo e educacional que explora os dilemas éticos da **Internet dos Corpos (IoB)** e do **Feminismo de Dados** através de cenários narrativos baseados em casos reais.

## Sobre o Projeto

EtiCCista é uma plataforma de pesquisa acadêmica desenvolvida como Trabalho de Conclusão de Curso (TCC) em Ciência da Computação. O projeto investiga a seguinte hipótese:

> **"Estudantes de computação apresentam baixo nível de conscientização sobre riscos éticos e vieses em Internet dos Corpos."**

### Funcionalidades Principais

- **Cenários Interativos**: Simule decisões técnicas em desenvolvimento de IoB através de narrativas contextualizadas
- **Feedback Ético**: Receba análise imediata sobre implicações éticas de suas escolhas
- **Coleta de Dados**: Sistema anônimo para pesquisa acadêmica sobre conscientização ética
- **Dark Mode**: Interface com suporte a tema claro e escuro
- **Autenticação Institucional**: Login seguro com Supabase
- **Dashboard Pessoal**: Visualize seus resultados e dados de participação

## Guia de Instalação

### Pré-requisitos

- **Node.js 18+** e **npm** (ou use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- **Git**

### Passos de Configuração

1. **Clone o repositório**
   ```bash
   git clone https://github.com/linasdias/Eticcista.git
   cd Eticcista
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env.local` na raiz do projeto com suas credenciais Supabase:
   ```
   VITE_SUPABASE_URL=sua_url_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

   O site estará disponível em `http://localhost:5173` (ou outra porta se esta estiver em uso)

5. **Acesse o navegador**
   - Abra http://localhost:5173 no seu navegador
   - Explore os cenários e teste a plataforma

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|---|---|---|
| **React** | 18.3+ | Framework UI |
| **TypeScript** | 5.6+ | Type safety |
| **Vite** | 5.4+ | Build tool e dev server |
| **Tailwind CSS** | 3.4+ | Estilização |
| **shadcn-ui** | - | Componentes UI |
| **React Router** | 6.30+ | Roteamento |
| **Supabase** | - | Backend, autenticação e BD |
| **React Query** | - | Gerenciamento de estado |

## Como Usar

### Para Participantes
1. Acesse a página inicial
2. Clique em "Começar Agora" ou faça login
3. Leia o termo de consentimento (LGPD)
4. Complete seu perfil
5. Escolha um cenário e participe da simulação
6. Receba feedback sobre suas decisões éticas
7. Visualize seus resultados no dashboard

### Para Desenvolvedores

**Build para produção:**
```bash
npm run build
```

**Executar testes:**
```bash
npm run test
```

**Lint do código:**
```bash
npm run lint
```

## Cenários Disponíveis

- **Marca-Passo Inteligente**: Dilemas de segurança e privacidade em dispositivos médicos conectados
- **App de Menstruação**: Questões sobre coleta de dados biométricos e consentimento

Novos cenários podem ser adicionados em `src/data/scenarios/`

## Privacidade e LGPD

Esta plataforma está em conformidade com a Lei Geral de Proteção de Dados (LGPD):

- ✅ Consentimento informado explícito antes da participação
- ✅ Anonimização de dados para análise
- ✅ Coleta mínima de informações pessoais necessárias
- ✅ Armazenamento seguro com criptografia
- ✅ Direito de exclusão de dados mediante solicitação
- ✅ Transparência sobre uso de dados para fins acadêmicos

## Contribuindo

Quer contribuir? Siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

**Desenvolvido com ❤️ para promover conscientização ética em tecnologia.**
