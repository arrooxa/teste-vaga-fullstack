# Teste Prático para Desenvolvedor Full Stack Kronoos

# Go-to

- [How to run](#how-to-run)
- [Links](#links)
- [Tecnologias](#tech)
- [Exercicio](#exercise)

<a name="how-to-run"></a>

# How to run

## Rodando o projeto pela primeira vez

Esse projeto é totalmente dockerizado para a facilitação na execução dos processos, tendo em vista que há problemas quando se trata de máquinas diferentes, os container podem ser executados da seguinte forma:

**OBS**: Certifique-se que o seu terminal se encontra no diretório raiz.

```bash
docker-compose up -d
```

Ao rodar esse comando, você terá executado o banco de dados (PostgreSQL) e a aplicação pgAdmin para visualização dos registros. O próximo passo é executar o back-end para popular o banco de dados, para isso execute os seguintes comandos:

**OBS:** Certifique-se que o seu terminal se encontra no diretório server.

```bash
npm run boostrap
```

Aguarde os dados serem populados no banco de dados e o back-end será inicializado. Após a inicialização do back-end, temos a inicialização do front-end que consiste em:

**OBS:** Certifique-se que o seu terminal se encontra no diretório web.

```bash
npm run bootstrap
```

## Rodando pelas demais vezes

Para inicialização do projeto nas demais vezes é só executar os próximos comandos.

### No diretório raíz:

```bash
docker-compose up -d
```

## No diretório server e web:

```bash
npm run dev
```

<a name="links"></a>

# Links

Após a inicialização dos projetos, as aplicações estarão disponíveis nos seguintes URLs:

## Front-end (Web)

[http://localhost:3000](http://localhost:3000)

## Back-end (Server)

[http://localhost:3001](http://localhost:3001)

## pgAdmin

[http://localhost:5050](http://localhost:5050)

<a name="tech"></a>

# Tecnologias

Abaixo deixo listada as tecnologias utilizadas nas vertentes do projeto:

## Back-end

- Typescript
- Express (API)
- Prisma (ORM)
- Joi (Validação de endpoints)
- Csv-parser

## Front-end

- Typescript
- Next.js (SSR)
- Tailwind (Estilização)
- React-query (Fetch data)
- Zustand (Gerenciamento de estados)

<a name="exercise"></a>

# Exercício

Você foi designado para desenvolver uma aplicação full stack para lidar com grandes volumes de dados. A aplicação consistirá em um frontend usando Vite ou Next.js, se comunicando com um backend que pode ser construído utilizando HTTP ou WebSocket para troca de dados. O backend será responsável por fornecer uma massa de dados considerável (cerca de 30GB). Além disso, a aplicação deve ser capaz de lidar com dados fornecidos em um formato CSV mal formatado.

_Observação Importante:_

1. Pedimos extremo comprometimento com o teste, e utilizamos IA para validar se os testes foram gerados por alguma IA (ChatGPT, LhamaGPT, Bard, Jasper, entre outras). Sua dedicação será crucial para uma avaliação justa.
2. Pedimos que clonem o repo ou façam um fork para o github pessoal e nos sinalizem quando finalizarem, pois não será possível abrir PR neste repositório do teste.

## Manipulação de Dados de CSV e Conversão para Array

- Os dados são fornecidos em formato CSV.
- Utilizaremos a biblioteca fs (File System) para ler o arquivo CSV e a biblioteca csv-parser para processar os dados e convertê-los em um array de objetos JavaScript.

## Conversão de Dados para Moeda Real Brasileira

- Valores monetários, como vlTotal, vlPresta, vlMora, etc., precisam ser formatados como moeda brasileira (BRL).
- Utilizaremos a biblioteca intl do JavaScript para formatar os valores numéricos como moeda BRL, incluindo o símbolo de real (R$), separador de milhar e precisão de duas casas decimais.

## Validação de CPF ou CNPJ

- Implementaremos uma função para validar o campo nrCpfCnpj e verificar se ele é um CPF ou CNPJ válido, seguindo as regras de validação apropriadas para cada formato.
- Parte de todos os CPF e CNPJ sao invalidos, usamos um script para gerar dados fictícios.

## Validação de Valor Total e Prestações

- Dividiremos o valor de vlTotal pela quantidade de prestações (qtPrestacoes).
- Verificaremos se o resultado dessa divisão é igual ao valor de vlPresta para cada prestação, garantindo que os cálculos estejam corretos e consistentes.
- Para chegar a um valor aproximado, devera converter o valor total para um numero inteiro, ignorando as dezenas quebradas, e calculando a data de pagamento para verificar se existe juros acumulado, e o valor de mora, caso o valor do movimento(vlMovimento) seja maior que o valor do pagamento (vlPag), devera construir uma trataviva adequada dizendo que o pagamento está inconsistente no frontend.

## Conversão de Datas para o Tipo Date

- Os campos dtContrato e dtVctPre estão no formato YYYYMMDD.
- Utilizaremos o JavaScript para converter esses campos em objetos do tipo Date, permitindo manipulações e formatações mais adequadas.

## Frontend

1. _Framework Frontend:_

   - Escolha entre Vite ou Next.js para desenvolver o frontend.

2. _Comunicação com Backend:_

   - Implemente a comunicação entre o frontend e o backend utilizando métodos assíncronos (HTTP ou WebSocket).

3. _Tratativa de Leitura de Dados em Larga Escala:_

   - Implemente tratativas eficientes para a leitura de grandes volumes de dados.
   - Considere estratégias como paginação, carregamento sob demanda ou outras técnicas para otimizar o desempenho.

4. _Gerenciador de Estados:_

   - Utilize um gerenciador de estados (Redux, Zustand, Mobx, etc.) para gerenciar o estado da aplicação.

5. _Manipulação de Dados:_

   - Implemente lógica para manipular os dados recebidos do backend.
   - Considere ordenação, filtragem e outras operações relevantes.

6. _Frontend com Massa de Dados:_

   - Desenvolva a interface do usuário para renderizar grandes volumes de dados de forma eficiente.

7. _Gerenciador de Estado:_

   - Utilize um gerenciador de estados para compartilhar dados e querys.

8. _Opcional - GraphQL:_
   - Implemente uma camada opcional de GraphQL como BFF (Backend For Frontend).

## Backend

1. _Escolha de Framework:_

   - Escolha um framework (Express, NestJS ou HTTP nativo) para desenvolver o backend.

2. _Comunicação com Frontend:_

   - Implemente endpoints HTTP ou WebSocket para fornecer dados ao frontend.

3. _Tratativa de Leitura de Dados em Larga Escala:_

   - Implemente tratativas eficientes para a leitura e fornecimento de grandes volumes de dados.

4. _Arquitetura - Opcional:_

   - Implemente a arquitetura hexagonal ou DDD.

5. _Banco de Dados:_

   - Utilize MongoDB ou PostgreSQL como banco de dados.
   - Utilize Prisma ou Mongoose como ORM.

6. _Tratamento de CSV:_
   - Implemente uma lógica para ler, tratar e manipular dados provenientes de um CSV mal formatado.

## Opcionais (Pontos Extras)

1. _Conhecimento em Flatbuffer:_

   - Demonstre conhecimento em Flatbuffer para otimizar a serialização e desserialização de dados.

2. _Testes Unitários e Automatizados:_

   - Implemente testes unitários para o frontend e o backend.
   - Utilize ferramentas como Jest, Testing Library, Mocha, etc.

3. _Conteinerização:_

   - Utilize Docker para conteinerizar a aplicação.

4. _Orquestração de Containers:_

   - Utilize Kubernetes para orquestrar os containers.

5. _Integração Contínua:_

   - Configure integração contínua com Jenkins.

6. _Typescript:_

   - Utilize TypeScript para aumentar a segurança e clareza do código.

7. _N8n:_

   - Integre o N8n para automação de fluxos de trabalho.

8. _API Gateway:_

   - Configure um API Gateway para gerenciar a comunicação entre frontend e backend.

9. _Banco de Dados NoSQL - Opcional:_

   - Utilize Neo4j ou Cassandra como banco de dados NoSQL.

10. _Tenha conhecimento em Neo4j em geral_

---

A conclusão bem-sucedida deste teste será avaliada com base na implementação eficiente de conceitos como tratamento de dados em larga escala, comunicação assíncrona, gerenciamento de estado, manipulação de CSV, escolha adequada de tecnologias e boas práticas de desenvolvimento. O cumprimento dos opcionais será considerado como um diferencial.

Boa sorte!
