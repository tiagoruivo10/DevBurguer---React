# 🍔 DevBurger Web

Frontend da plataforma **DevBurger**, uma aplicação completa para pedidos online de hamburgueria, desenvolvida com React e integrada à DevBurger API.

A aplicação oferece uma experiência moderna para clientes realizarem pedidos, gerenciarem carrinhos de compras e efetuarem pagamentos online, além de disponibilizar uma área administrativa para gerenciamento de produtos e pedidos.

---

# 📖 Sobre o Projeto

O DevBurger Web foi desenvolvido com o objetivo de simular uma plataforma real de delivery, permitindo que usuários realizem pedidos de forma simples, rápida e segura.

A aplicação possui dois ambientes distintos:

### 👤 Área do Cliente

Responsável pela navegação do cardápio, gerenciamento do carrinho e finalização das compras.

### 👨‍💼 Área Administrativa

Responsável pelo gerenciamento dos produtos, acompanhamento dos pedidos e controle operacional da hamburgueria.

Toda a comunicação com os dados é realizada através da DevBurger API.

---

# 🚀 Tecnologias Utilizadas

## Frontend

* React 19
* JavaScript (ES6+)
* Vite

## Estilização

* Styled Components
* Material UI (MUI)
* Emotion

## Formulários e Validação

* React Hook Form
* Yup
* Hook Form Resolvers

## Roteamento

* React Router DOM

## Comunicação com API

* Axios

## Pagamentos

* Stripe
* Stripe React SDK

## Feedback ao Usuário

* React Toastify

## Componentes Extras

* React Select
* React Multi Carousel
* Phosphor Icons

---

# ✨ Funcionalidades

## Autenticação

* Cadastro de usuários
* Login seguro
* Persistência de sessão
* Controle de acesso

## Cardápio Digital

* Listagem de produtos
* Organização por categorias
* Navegação intuitiva
* Exibição de imagens dos produtos

## Carrinho de Compras

* Adicionar produtos
* Remover produtos
* Atualizar quantidades
* Cálculo automático do pedido

## Checkout

* Revisão dos itens
* Resumo financeiro
* Confirmação do pedido

## Pagamentos Online

* Integração com Stripe
* Processamento seguro de pagamentos
* Confirmação de transação

## Área Administrativa

* Cadastro de produtos
* Edição de produtos
* Gerenciamento de pedidos
* Controle operacional da hamburgueria

---

# 🏗️ Arquitetura do Projeto

O projeto foi estruturado utilizando uma arquitetura baseada em componentes reutilizáveis.

```text
src/
├── assets/
├── components/
├── config/
├── containers/
├── hooks/
├── layouts/
├── routes/
├── services/
├── styles/
├── utils/
└── main.jsx
```

---

# 📂 Estrutura das Principais Áreas

## Components

Contém componentes reutilizáveis utilizados em toda a aplicação.

Exemplos:

* Buttons
* Inputs
* Cards
* Headers
* Product Cards
* Select Components

---

## Containers

Representam as páginas principais da aplicação.

### Home

Página inicial da hamburgueria.

### Menu

Exibição do cardápio completo.

### Cart

Carrinho de compras.

### Checkout

Finalização do pedido.

### Complete Payment

Confirmação do pagamento.

### Login

Autenticação de usuários.

### Register

Cadastro de novos usuários.

---

## Administração

### Products

Gerenciamento dos produtos cadastrados.

### New Product

Cadastro de novos itens.

### Edit Product

Atualização de produtos existentes.

### Orders

Gerenciamento dos pedidos realizados.

---

# 🛒 Fluxo de Compra

O sistema segue um fluxo semelhante ao utilizado por plataformas reais de delivery.

### 1. Navegação

O usuário acessa o cardápio.

### 2. Seleção

Produtos são adicionados ao carrinho.

### 3. Revisão

O pedido é revisado na tela do carrinho.

### 4. Checkout

Os dados do pedido são enviados para a API.

### 5. Pagamento

O Stripe processa a transação.

### 6. Confirmação

O pedido é finalizado e registrado no sistema.

---

# 💳 Integração com Stripe

A aplicação utiliza Stripe para processamento de pagamentos.

### Recursos Implementados

* Payment Intent
* Integração com cartão de crédito
* Comunicação segura
* Confirmação de pagamento

Benefícios:

* Segurança
* Escalabilidade
* Experiência profissional de checkout

---

# 👨‍💼 Painel Administrativo

O sistema disponibiliza uma área exclusiva para administradores.

### Funcionalidades

#### Produtos

* Criar produtos
* Editar produtos
* Atualizar preços
* Gerenciar imagens

#### Pedidos

* Consultar pedidos
* Atualizar status
* Acompanhar operações

#### Controle Operacional

* Gestão centralizada da hamburgueria

---

# 📱 Responsividade

A interface foi desenvolvida para proporcionar uma boa experiência em diferentes dispositivos.

### Compatibilidade

* Desktop
* Notebook
* Tablet
* Smartphone

---

# 🔐 Segurança

O sistema utiliza autenticação baseada em token.

Recursos:

* Rotas protegidas
* Controle de permissões
* Proteção de recursos administrativos
* Integração com backend autenticado

---

# 🌐 Integração com Backend

O frontend consome os serviços disponibilizados pela DevBurger API.

### Recursos Consumidos

* Usuários
* Sessões
* Produtos
* Categorias
* Pedidos
* Pagamentos

---

# ⚙️ Instalação

## Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

## Entrar na pasta do projeto

```bash
cd devburguer-interface
```

## Instalar dependências

```bash
npm install
```

ou

```bash
yarn install
```

---

# 🔐 Variáveis de Ambiente

Crie um arquivo:

```env
.env
```

Exemplo:

```env
VITE_API_URL=http://localhost:3001

VITE_STRIPE_PUBLIC_KEY=
```

---

# ▶️ Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

---

# 📦 Gerando Build de Produção

```bash
npm run build
```

Visualizar build localmente:

```bash
npm run preview
```

---

# 🎯 Objetivos do Projeto

* Desenvolver uma aplicação frontend moderna utilizando React.
* Construir uma experiência completa de e-commerce/delivery.
* Aplicar conceitos de componentização reutilizável.
* Integrar frontend e backend através de APIs REST.
* Trabalhar com autenticação e autorização.
* Implementar pagamentos online utilizando Stripe.
* Desenvolver uma área administrativa funcional.

---

# 📚 Conceitos Aplicados

* React Hooks
* Componentização
* Context API
* Consumo de APIs REST
* Gerenciamento de Estado
* Autenticação
* Upload de Arquivos
* Checkout Online
* Integração com Pagamentos
* Arquitetura Frontend Escalável

---

# 👨‍💻 Autor

Desenvolvido por Tiago Ruivo.

Projeto desenvolvido para compor portfólio profissional e demonstrar conhecimentos em React, Vite, Styled Components, Material UI, React Hook Form, integração com APIs REST, autenticação de usuários e processamento de pagamentos online utilizando Stripe.
