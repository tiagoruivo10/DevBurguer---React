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

## 📂 Estrutura das Principais Áreas

| Container (Página) | Perfil de Acesso | Descrição Funcional |
| :--- | :--- | :--- |
| `Home` & `Menu` | Cliente | Apresentação inicial da hamburgueria e exibição do cardápio completo. |
| `Cart` & `Checkout` | Cliente | Carrinho de compras dinâmico e revisão para finalização do pedido. |
| `Complete Payment` | Cliente | Tela de sucesso e confirmação do pagamento. |
| `Login` & `Register` | Público | Autenticação de usuários e registro de novos clientes. |
| `Products` | Administrador | Listagem, cadastro (`New`) e edição (`Edit`) de itens do cardápio. |
| `Orders` | Administrador | Visualização e atualização de status das comandas em andamento. |

---

## 🛒 Fluxo de Compra Integrado

O sistema segue rigorosamente o fluxo de plataformas reais de e-commerce e delivery:

1. **Navegação:** O usuário acessa a plataforma e explora o cardápio.
2. **Seleção:** Produtos são escolhidos e adicionados ao carrinho.
3. **Revisão:** O pedido e o cálculo financeiro são validados na tela do carrinho.
4. **Checkout:** Os dados de entrega e pedido são processados.
5. **Pagamento:** O Stripe processa e valida a transação online de forma segura com cartão de crédito (Payment Intent).
6. **Confirmação:** O pedido é finalizado, registrado no sistema e notificado na tela.

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

## ⚙️ Instalação e Execução

Siga os passos abaixo para configurar, instalar as dependências e executar o projeto localmente.

### 1. Clonar e Instalar
```bash
# Clonar o repositório
git clone URL_DO_REPOSITORIO

# Entrar na pasta do projeto
cd devburguer-interface

# Instalar as dependências do projeto
npm install
# ou caso prefira utilizar o yarn: yarn install

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
