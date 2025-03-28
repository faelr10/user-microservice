# 🛰️ Kafka Microservice with NestJS

Este projeto é uma aplicação de microserviço construída com **NestJS** que utiliza o **Apache Kafka** para comunicação assíncrona. Ele inclui um **API Gateway**, **consumidores Kafka**, e suporte para ambientes com **Docker** e **docker-compose**.

---

## 📁 Estrutura do Projeto

```
.
├── .eslintrc.js              # Regras do ESLint
├── .gitignore                # Arquivos ignorados pelo Git
├── .prettierrc               # Configuração do Prettier
├── Dockerfile                # Configuração da imagem Docker
├── README.md                 # Este arquivo :)
├── docker-compose.yml        # Orquestração dos containers
├── kafka.yml                 # Configurações específicas do Kafka
├── nest-cli.json             # Configuração do Nest CLI
├── nest.yml                  # Configuração do NestJS
├── package-lock.json
├── package.json              # Dependências e scripts
├── test-kafka.js             # Script para testar o Kafka
├── tsconfig.build.json       # Configuração de build TypeScript
├── tsconfig.json             # Configuração base TypeScript
└── src
    ├── api-gateway
    │   ├── api-gateway.controller.ts
    │   ├── api-gateway.dto.ts
    │   ├── api-gateway.module.ts
    │   ├── api-gateway.service.ts
    │   └── structure.ts
    ├── app.module.ts
    ├── consumer
    │   ├── consumer.controller.ts
    │   └── consumer.module.ts
    ├── kafka.controller.ts
    ├── main.ts
    └── services
        ├── kafka-consumer.service.ts
        └── kafka.config.ts
```

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **Apache Kafka**
- **Docker & Docker Compose**
- **TypeScript**
- **ESLint & Prettier**

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### 1. Instale as dependências

```bash
npm install
```

### 2. Suba o ambiente com Docker

```bash
docker-compose up
```

> Isso vai subir a aplicação NestJS e os serviços do Kafka definidos no `kafka.yml`.

### 3. Rodar localmente (sem Docker)

```bash
npm run start:dev
```

---

## 📨 Produzindo e Consumindo mensagens Kafka

- O arquivo `test-kafka.js` simula o envio de mensagens Kafka.
- Os consumidores estão em `src/consumer` e `src/services/kafka-consumer.service.ts`.
- O gateway HTTP está em `src/api-gateway` e publica mensagens no Kafka.

---

## 📦 Scripts disponíveis

```bash
npm run start:dev       # Inicia a aplicação em modo desenvolvimento
npm run build           # Compila a aplicação para produção
npm run lint            # Verifica os padrões de código com ESLint
```

---

## 🧪 Testando Kafka

Para testar o envio de mensagens manualmente:

```bash
node test-kafka.js
```

Você também pode utilizar ferramentas como [Kafka UI](https://provectus.io/open-source/kafka-ui/) para monitoramento dos tópicos e mensagens.

---

## 📌 Observações

- Certifique-se de que o Kafka esteja rodando corretamente antes de iniciar os consumidores.
- A estrutura modular facilita a escalabilidade por microserviços.
- O projeto segue boas práticas com uso de DTOs, serviços e controllers desacoplados.

---

## 📃 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
