# Gym
A gym é uma plataforma de trino que é composta de um blogger e um loja comercial, seu foco está em ensinar e a entregar produtos de qualidade e confiança para os seus usuários.

#

Este projeto se mantém em construção já que não é um projeto que tem fim, a ideia é trazer mais funcionalidades e ferramentas, nele estou eulitlizando várias stacks usando arquitetura de micro serviços usando sistemas de mensageria com o kafka e o framwork node Nestjs além do front-end estar sendo contruido com NextJS e React. O objetivo é ultilizar várias stacks diversificando e integrando cada uma delas.
Stacks ultilizadas:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Type-graphql](https://img.shields.io/badge/-TypeGraphQL-%23C04392?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

#

## Executando o projeto
Ates de executar o proejto, você precisa criar colocar crar nessa rota um arquivo .env e colocar entro desse arquivo as seguintes propriedades

```env
POSTGRES_USER=USERFROMPOSTGRES
POSTGRES_PASSWORD=MUSTBESTRONGAPASSWORD
POSTGRES_DB=GY_DB
POSTGRES_GYM_DATABSE_PORT=5432
POSTGRES_GRYM_DATABSE_HOST=gym-databse

PRODUCT_DATABASE_USER=PRODUCT_DATABASE_USER
PRODUCT_DATABASE_PASSWORD=PRODUCT_DATABASE_PASSWORD
PRODUCT_DATABASE_DB=PRODUCT_DATABASE_DB
PRODUCT_DATABASE_PORT=5432
PRODUCT_DATABASE_LOCALHOST_PORT=5430
PRODUCT_DATABASE_HOST=product_gym_database

USER_DATABASE_USER=USER_DATABASE_USER
USER_DATABASE_PASSWORD=USER_DATABASE_PASSWORD
USER_DATABASE_DB=USER_DATABASE_DB
USER_DATABASE_PORT=5432
USER_DATABASE_LOCALHOST_PORT= 5431
USER_DATABASE_HOST=user_gym_database

PAYMENT_DATABASE_USER=PAYMENT_DATABASE_USER
PAYMENT_DATABASE_PASSWORD=PAYMENT_DATABASE_PASSWORD
PAYMENT_DATABASE_DB=PAYMENT_DATABASE_DB
PAYMENT_DATABASE_PORT=5432
PAYMENT_DATABASE_LOCALHOST_PORT=5432
PAYMENT_DATABASE_HOST=payment_gym_database


PGADMIN_DEFAULT_EMAIL=admin_email@gmail.com
PGADMIN_DEFAULT_PASSWORD=passwordformpgadmin

JWT_SECRET=SECRET
DATABASE_URL="postgresql://USERFROMPOSTGRES:MUSTBESTRONGAPASSWORD@localhost:5432/GY_DB?schema=public"
```

Como a aplicação está dockerizada fica muito símples de executar o projeto, mas é nescessário que o docker esteja instalado. Para executar rode o comando

```console
docker compose up 
```

#

## Arquitetura
Essa imagem mostra a arquitetura da aplicação onde temos um front end, uma api gate_way o kafka e no final os micro serviços, o banco de dados esta oculto até o momento.
![ARCHETETURE](./README_ASSETS/archeteture.png)

#

## Front end
O front end é onde o usuário terá acesso ao usar a plataform, ele está sendo construido com Nextjs ultilizando o stitches para dar estilo na página. Sua url está em http://localhost:3001
![frontend](./README_ASSETS/gym_frontend.png)

#

## Backend 
O backend foi construido com nestjs porém não como o modelo tradicional de rest mas sim com graphql, decidi usar essa ferramenta priemiro porque amo sendo que é uma das ferramentas quem mais gosto e segundo pelo fato de diversificar um pouco do modelo tradicional. Até o momento não foi aplicado também rest sendo que pretendo usar ambos os métodos para construir a api já que um não restringe o outro já que estou ultilizando os conceitos de solid. Desde que eu injete o serviço seja no controller ou no resolver e ultilize de forma correta a api vai funcionar de qualquer forma. Para me comunicar com cada micro serviço, estou ultilizando o kafka como menssageria e até o momento estou ultilizando os conceitos de request e reply para comunicar entre os microserviços entre si.

### Kafka UI

Quando subir os contianer e se eles subirem de forma coreta, você podera acessar o gerenciador do kafka que é o kafkaui, como ele está espelhado no sistema operacional, você pode acessar com a url http://localhost:8080

![Topics](./README_ASSETS/topics.png)

#

### Graphql API

Como por padrão estou ultilizando graphql nesse projeto, a api poderá ser acessada em http://localhost:3000 e a api do graphql está no end point [/graphql](http://localhost:3000/graphql). Em desenvolivmento você pode acessar o playground e nele tem o inteliscense de como realizar as querys e mutations além de uma breve documentação no lado direito da página.

![graphql api](./README_ASSETS/graphql_api.png)