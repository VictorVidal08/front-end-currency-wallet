
# 💵 Project Currency Wallet 🤑

<details>
<summary><h1>English Version</h1></summary>

<h1>🤑 💸 Welcome to Currency Wallet Project! 💵 💰</h1>

# Deploy:

https://front-end-currency-wallet-production.up.railway.app/

# Project Resume:

<p>Currency Wallet is a front-end application that, by consuming an API, is capable of recording exchanges in various currencies, converting them to Brazilian real and informing the total amount of expenses.</p>

<h3>Main features:</h3>

  - Login (with any email in valid format and any password longer than 6 characters);
  - Add and remove an expense;
  - View a table with your spending in many currencies and categories;
  - View total spend converted to a currency of choice;

# Technologies:

 - Store Redux into React app
 - Reducers Redux into application
 - Actions Redux into application
 - Dispatchers Redux into application
 - Connect Redux to React Components
 - Using async actions in the React application using Redux.

# About the Currency Exchange API:

<p>The application consumes the awesomeapi API that allows you to perform a currency exchange search. The following endpoint is queried:</p>

- https://economia.awesomeapi.com.br/json/all

The endpoint returns data in the format below:

```
{
   {
     "USD": {
       "code":"USD",
       "codein":"BRL",
       "name":"Dólar Americano/Real Brasileiro",
       "high":"5.6689",
       "low":"5.6071",
       "varBid":"-0.0166",
       "pctChange":"-0.29",
       "bid":"5.6173",
       "ask":"5.6183",
       "timestamp":"1601476370",
       "create_date":"2020-09-30 11:32:53"
       },
      ...
   }
}
```
For more information about the API, see the [documentation](https://docs.awesomeapi.com.br/api-de-moedas).
# Login Screen:

<img src='./public/loginWallet.png' alt='loginImage' width='500'/>

# Expense record screen:

<img src='./public/LoginWalletTable.png' alt='tableImage' width='500'/>

# How to Run:

<p>Follow the following steps to run this project! 😃</p>

- git clone
- npm install
- npm start

</details>

<h1>🤑 💸 Bem vindo ao Currency Wallet! 💵 💰</h1>

# Deploy:

https://front-end-currency-wallet-production.up.railway.app/

# Resumo do projeto:

<p>O Currency Wallet é uma aplicação front-end que, ao consumir uma API, é capaz de registrar gastos em varias moedas, converter para real e informar o valor total das despesas.</p>

<h3>Principais funcionalidades:</h3>

  - Fazer login (com algum email em formato válido e qualquer senha com mais de 6 caracteres);
  - Adicionar e remover um gasto;
  - Visualizar uma tabelas com seus gastos;
  - Visualizar o total de gastos convertidos para uma moeda de escolha;

# Ferramentas utilizadas:

 - Store Redux na aplicações React
 - Reducers no Redux na aplicação React
 - Actions no Redux na aplicação  React
 - Dispatchers no Redux na aplicação React
 - Conectar o Redux aos componentes React
 - Utilização de actions assíncronas na aplicação React utilizando de Redux.

# Sobre a API de conversão de moedas:

<p>A aplicação consome a API do awesomeapi que permite realizar a busca de câmbio de moedas. O seguinte endpoint é consultado: </p>

- https://economia.awesomeapi.com.br/json/all

O endpoint retorna dados no formato abaixo:

```
{
   {
     "USD": {
       "code":"USD",
       "codein":"BRL",
       "name":"Dólar Americano/Real Brasileiro",
       "high":"5.6689",
       "low":"5.6071",
       "varBid":"-0.0166",
       "pctChange":"-0.29",
       "bid":"5.6173",
       "ask":"5.6183",
       "timestamp":"1601476370",
       "create_date":"2020-09-30 11:32:53"
       },
      ...
   }
}
```
Para mais informações sobre a API, veja a [documentação](https://docs.awesomeapi.com.br/api-de-moedas).
# Tela de Login:

<img src='./public/loginWallet.png' alt='loginImage' width='500'/>

# Tela de registro de despesas:

<img src='./public/LoginWalletTable.png' alt='tableImage' width='500'/>

# Como rodar o projeto:

<p>Siga os passos abaixo para rodar o projeto! 😃</p>

- git clone
- npm install
- npm start