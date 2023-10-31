# Projeto para vertical da logística
Esse projeto foi desenvolvido com objetivo de cumprir com o desafio proposto pelo time da vertical de logística.
- node
- mongoDB
- Typescript

### Dependencies
- @hapi/hapi: ^21.3.2
- amqplib: ^0.10.3
- axios: ^1.5.1
- dotenv: ^16.3.1
- mongoose: ^7.6.3
- ts-node: ^10.9.1
- typescript: ^5.2.2

### Instalation
- **1.** npm install
- **2.** npm run server


### Sobre as rotas estabelecidas
- **1.** GET - /purchases/ **(Lista todos os pedidos)**
- **2.** GET - /purchases/orders/{orderId} **(Lista o pedido do código fornecido)**
- **3.** GET - /purchases/orders/{beginDate}/{endDate} **(Lista os pedidos das datas fornecidas)**
- **4.** POST - /purchases/ **(Inclui os itens do arquivo que foi passado pelo body)**
![image](https://github.com/karolineguckert/luizalabsverticallogistica/assets/60297870/d53e5e8f-2a12-4084-9f3e-9a3459120f71)

## Sobre a estrutura do projeto

![image](https://github.com/karolineguckert/luizalabsverticallogistica/assets/60297870/a4d80a82-52fe-4d17-983b-9264d14c82f3)

- **Business:** Contém as manipulações das regras de negócio e interação com o banco de dados.
  
  ![image](https://github.com/karolineguckert/luizalabsverticallogistica/assets/60297870/7b13607f-d505-43d9-be6e-87d802c82ea4)
  
- **DTO:** Contém os objetos auxiliares criados para as manipulações no projeto.

  ![image](https://github.com/karolineguckert/luizalabsverticallogistica/assets/60297870/94ea0bbf-b6c3-436e-8053-358d9f0eaeb4)

  
- **Entity:** Contém a criação da entidade do banco de dados.
  
  ![image](https://github.com/karolineguckert/luizalabsverticallogistica/assets/60297870/d38e7ee5-88da-4d28-a661-4965a0cdd806)


- **Repository:** Contém as querys relacionadas a tabela criada para o projeto.
  
  ![image](https://github.com/karolineguckert/luizalabsverticallogistica/assets/60297870/e0c7ad43-043a-4064-8782-33442406e2ca)

- **Routes:** Contém a definição de todas as rotas estabelecidas para o projeto.

  ![image](https://github.com/karolineguckert/luizalabsverticallogistica/assets/60297870/f67ac691-b0d3-458a-9a82-c9e353437300)

- **Scripts:** Contém o script que inicia o server do projeto e a conexão com o banco de dados.
- **Service:** Contém o service auxiliar para a conexão com o banco de dados.
  
  
