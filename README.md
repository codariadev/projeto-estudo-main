# SincroAlign CRM Inteligente

Um CRM feito para quem precisa.

> 🌱 **Projeto de estudo.** O SincroAlign é desenvolvido por [CodariaDev](https://github.com/codariadev) e colaboradores com um objetivo principal: **aprender na prática**. Aqui o processo importa tanto quanto o resultado, então erros, refatorações e experimentos fazem parte da proposta.

---

## 🧰 Tecnologias

| Tecnologia | Uso |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | Framework principal |
| [React 19](https://react.dev/) | Construção da interface |
| JavaScript | Linguagem do projeto |
| [React Compiler](https://react.dev/learn/react-compiler) | Otimização automática de renderização |
| [ESLint](https://eslint.org/) | Análise e padronização do código |
| [Prettier](https://prettier.io/) | Formatação automática |

---

## 🎯 Objetivo do projeto

O plano é evoluir o projeto até um CRM para gestão de clientes e projetos. As funcionalidades abaixo são o **roteiro de aprendizado**, e cada uma é uma boa oportunidade de praticar um conceito novo:

- [ ] Estrutura base e navegação (rotas do Next.js)
- [ ] Componentização e reaproveitamento de UI
- [ ] Cadastro e listagem de clientes
- [ ] Quadro Kanban para acompanhar projetos
- [ ] Painel com métricas
- [ ] Persistência de dados (banco de dados)
- [ ] Autenticação e controle de acesso
- [ ] Arquitetura multi-tenant

> Marque os itens conforme forem concluídos. Se algo aqui ainda não existe no código, é porque faz parte do que estamos aprendendo a construir. 😉

---

## 🚀 Como começar

### 1. Pré-requisitos

Você precisa ter o **Node.js** instalado, de preferência a versão **LTS (Long Term Support)**.

Para verificar se já está instalado:

```bash
node -v
```

Se não estiver, baixe em [nodejs.org](https://nodejs.org/). Você também vai precisar do [Git](https://git-scm.com/).

### 2. Clonando o repositório

```bash
# Clone o repositório
git clone "https://github.com/codariadev/projeto-estudo-main.git"

# Entre na pasta do projeto
cd projeto-estudo-main

# Instale as dependências
npm install
# ou yarn install / pnpm install / bun install
```

### 3. Rodando o projeto

```bash
npm run dev
# ou yarn dev / pnpm dev / bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. Ao editar um arquivo, a página atualiza sozinha.

---

## 📜 Scripts disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm start` | Executa a versão de produção (após o `build`) |
| `npm run lint` | Verifica e corrige problemas de código com ESLint |
| `npm run format` | Formata todo o código com Prettier |

---

## 🤝 Como contribuir (fluxo de trabalho)

Este projeto também serve para praticar o fluxo real de trabalho em equipe com Git e GitHub. O caminho recomendado:

1. **Escolha uma tarefa** (uma issue aberta ou algo combinado entre vocês).
2. **Atualize sua base** antes de começar:
   ```bash
   git checkout master
   git pull origin master
   ```
3. **Crie uma branch** para a sua tarefa:
   ```bash
   git checkout -b feature/nome-da-tarefa
   ```
4. **Desenvolva e teste** rodando `npm run dev`.
5. **Padronize o código** antes de commitar:
   ```bash
   npm run lint
   npm run format
   ```
6. **Faça commits pequenos e claros**, por exemplo:
   ```bash
   git add .
   git commit -m "feat: adiciona lista de clientes"
   ```
7. **Envie a branch** e abra um **Pull Request**:
   ```bash
   git push origin feature/nome-da-tarefa
   ```
8. **Peça revisão** de outra pessoa. O code review é uma das partes em que mais se aprende.

### Sugestão de prefixos para commits

| Prefixo | Quando usar |
| --- | --- |
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `docs:` | Mudanças na documentação |
| `style:` | Formatação, sem mudar a lógica |
| `refactor:` | Reorganização do código |
| `chore:` | Tarefas de configuração e manutenção |

---

## 📚 Guia de estudo

Alguns tópicos que este projeto ajuda a praticar, com links úteis:

- **Next.js:** [documentação oficial](https://nextjs.org/docs) e o [curso interativo Learn Next.js](https://nextjs.org/learn)
- **React:** [react.dev/learn](https://react.dev/learn)
- **JavaScript:** [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **Git e GitHub:** [GitHub Skills](https://skills.github.com/)

---

## 💡 Dicas para quem está aprendendo

- **Errar faz parte.** Leia a mensagem de erro com calma, ela costuma indicar o arquivo e a linha do problema.
- **Pergunte.** Dúvida compartilhada vira aprendizado para os dois.
- **Comece pequeno.** Uma funcionalidade simples e funcionando vale mais do que uma complexa pela metade.
- **Leia o código dos outros.** Os Pull Requests são ótimos para isso.
- **Entenda antes de copiar.** Se colar um trecho pronto, tente explicar com as suas palavras o que ele faz.

---

## 👥 Autores

- **CodariaDev** ([@codariadev](https://github.com/codariadev)), mantenedor
- **CientistaJunior** ([@cientistajunior](https://github.com/cientistajunior)), colaborador em aprendizado 🚀

---

## 📄 Licença

Distribuído sob a licença **MIT**.
