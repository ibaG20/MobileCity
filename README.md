# NODE-ANGULAR CHALLENGE – MOBILE CITY APP
## Sobre
Este repositório se propõe a trazer um sistema simples, a qual tem como estrutura, uma API NODE (Gabriella Rodrigues) consumida através de uma aplicação Angular (Carlos Costa), onde o objetivo foi o de praticar estas tecnologias a nível de conhecimento geral durante o curso de extensão do programa STARTER 4.
O sistema consiste de alguns CRUDs básicos com regras de negócio simples, onde basicamente existem 4 entidades, sendo elas: Usuário (utilizador do sistema, apenas para o controle de autenticação e desbloqueio de todas as funcionalidades), cliente, transporte e locação, que se relacionam conforme o diagrama UML abaixo:

<img src="UML.png">

## Algumas destas regras de negócio e validações são as seguintes:
- Validação de um cliente já existente baseada no CPF durante a criação de uma nova instância (POST .../clients).
- Validação de campos nulos ou inválidos (email) na criação de um novo cliente. 
- O cadastro de um cliente não pode ser desativado caso haja locações pendentes associadas a ele.
- Não são permitidas deleções de dados no banco, mas apenas deleções lógicas, onde o status da entidade passa a ser false.
- O verbo HTTP Delete em /rents foi utilizado para “baixar” a locação, dando-a como concluída e liberando o transporte associado a ela para ser locado novamente.
- Só é possível gerar locações para clientes com cadastro ativo e transportes disponíveis.
- Detalhes do cliente com o histórico de locações associados a este. 

## Para rodar a aplicação, basta seguir os seguintes passos: 

<u>Atualizando os pacotes e módulos:</u>

`npm update`

<u>Navegando até a pasta do back-end:</u>

`cd .\Backend\`

<u>Rodando o back-end:</u>

`yarn dev`

<u>Navegando até a pasta do front-end:</u>

`cd .\Frontend\MobileCityApp\`

<u>Rodando o front-end:</u>

`ng s`

## Informações

- Documentação da API: http://localhost:3333/api-docs/
- Angular CLI: 14.1.2
- Node: 16.15.0
- Package Manager: npm 8.5.5
- OS: win32 x64

## Aplicação

<img src="AppScreen.png">
