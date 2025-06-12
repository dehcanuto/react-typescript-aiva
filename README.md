# 🧪 E-Commerce - React (NextJS) + TypeScript
![Version](https://img.shields.io/badge/1.0.0-beta?label=version)
![!Next.js](https://img.shields.io/badge/Next.js-v15.3.3-black?style=flat-square&logo=next.js)
![Jest](https://img.shields.io/badge/Jest-29.7.0-C21325?style=flat-square&logo=jest&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?style=flat-square&logo=tailwindcss&logoColor=38bdf8)

Este é um projeto que consome a api `Fake Store API` para um ecommerce ficticio.

---

## 🔧 Tecnologias usadas

- [Node.js v18+](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js 15](https://nextjs.org/) – Framework React completo para produção, com suporte a renderização híbrida, rotas automáticas e otimizações de performance.
- [React 19](https://reactjs.org/) – Biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis.
- [Tailwind CSS](https://tailwindcss.com/) – Framework de CSS utilitário que permite criar interfaces responsivas de forma rápida e sem sair do HTML.
- [Axios](https://axios-http.com/) – Cliente HTTP baseado em Promises para fazer requisições ao backend com facilidade.
- [React Hook Form](https://react-hook-form.com/) – Biblioteca de formulários para React que fornece uma maneira simples e eficiente de lidar com inputs, validações e estados.
- [Fake Store API](https://api.escuelajs.co/docs) - API para consumo do frontend “e-commerce style” (produtos, categorias, usuários…).

## 📦 Requisitos

- **Node.js** (v18 ou superior)
- **Yarn**

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/dehcanuto/react-typescript-aiva
cd react-typescript-aiva
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Variáveis de ambiente

Preferi deixar o `.env` livre no repositório para encurtar os passos para rodar o projeto =D

---

## 🔥 Rode a aplicação

### Compila e usa Hot-Reload para ambiente de desenvolvimento

```sh
yarn dev
```

O projeto será apresentado através do link [http://localhost:5173](http://localhost:5173).

# 🧹 Rodando o Lint

Para manter a qualidade do código e seguir boas práticas, este projeto utiliza o ESLint com regras específicas para TypeScript e React.

### Como rodar o lint

Para verificar se há erros de lint no código, execute:

```bash
yarn lint
```

### Como corrigir erros automaticamente

Alguns erros podem ser corrigidos automaticamente com:

```bash
yarn lint --fix
```

---

# 🧪 Rodando os Testes

Para garantir que tudo está funcionando corretamente, siga estes passos para rodar os testes do projeto:

## 1. Execute os testes
Para rodar todos os testes com Jest:

```bash
yarn test
```

## 2. Rodando os testes em modo watch (assistir alterações)

Para rodar os testes continuamente enquanto desenvolve:

```bash
yarn test --watch
```

## 3. Cobertura de testes

Para rodar a cobertura de testes, basta executar esse comando no terminal:

```bash
yarn test:coverage
```

---

## ✅ To-do

- [ ] Fluxo de autenticação caso a API suporte (login, registro ou uso de token).
- [ ] Dashboard principal com listagem, busca e/ou filtros relevantes.
- [ ] Operações de CRUD (criar, editar, remover) para pelo menos um recurso-chave.
- [ ] Página de detalhe para um item individual.
- [ ] Responsividade e feedback visual (loading, estados vazios, erros).

**EXTRAS**

- Code splitting & lazy loading  
- Web Vitals e otimização de imagens  
- Design System/componentes reutilizáveis
- Documentação clara no **README.md**
- CI GitHub Actions (lint, build, testes)

**Stack (mínimo obrigatório)**

| Feito | Item | Requisito |
|-|------|-----------|
|✅| **Linguagem** | TypeScript |
|✅| **Framework/Bundler** | **Next.js** – explique no README por que escolheu 😉 |
|✅| **UI** | Tailwind |
|-| **Estado/Dados** | React Query, SWR, Redux Toolkit, Zustand… à sua escolha |
|✅| **Roteamento** | App/Pages Router (Next) |
|-| **Testes** | Jest + Testing Library **e** pelo menos 1 E2E (Cypress/Playwright) |
|✅| **Qualidade** | ESLint + Prettier, Husky/lint-staged, commits semânticos |
|-| **Deploy** | Vercel, Netlify, Render, Railway… versão grátis tá ótimo |

---

## Como entregar 📦

1. Repositório **público** no GitHub com todo o código.  
2. **README caprichado**: setup, scripts, `.env.example`, arquitetura, link de produção, motivo do Vite/Next.  
3. URL do **deploy** funcionando.

⏰ **Prazo de entrega**: 18/06/2025 23:59.  
Quando terminar, envie o link do repo + deploy.

---

## 👨‍💻 Sobre André Canuto

Sou desenvolvedor front-end desde 2016, com 9 anos de experiência. Iniciei minha carreira em agências de marketing, onde me especializei na criação de sites em WordPress e no design de landing pages otimizadas para SEO. Atualmente, atuo em ambientes de startups, contribuindo para projetos inovadores e desafiadores como front-end developer.

Tenho domínio de diversos frameworks e tecnologias, incluindo React, Angular, Vue.js, Nuxt, Next.js e Node.js. Utilizo os princípios do SOLID como base arquitetural e tenho experiência com bibliotecas de estilização como Tailwind CSS, Bootstrap e Material Design. Além disso, possuo ampla vivência com CMSs, PHP, Laravel, NestJS, MySQL, MongoDB, JavaScript e TypeScript.

Sou falante nativo de português, com proficiência B2 em inglês (First Certificate) e conhecimento básico de espanhol. Também possuo certificações em Vue.js, Angular e JavaScript pela Coodash.

Reconhecido pela criatividade, comunicação clara, dedicação, proatividade e escuta ativa, me comprometo com a entrega consistente de soluções de alta qualidade.

🔗 Me encontre por aqui:

- [Github](https://github.com/dehcanuto)
- [LinkedIn](https://www.linkedin.com/in/andre-canuto-77461b102/)
