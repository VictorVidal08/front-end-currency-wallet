
# π΅ Project Currency Wallet π€

<details>
<summary><h1>English Version</h1></summary>

<h1>π€ πΈ Welcome to Currency Wallet Project! π΅ π°</h1>

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
       "name":"DΓ³lar Americano/Real Brasileiro",
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

<p>Follow the following steps to run this project! π</p>

- git clone
- npm install
- npm start

</details>

<h1>π€ πΈ Bem vindo ao Currency Wallet! π΅ π°</h1>

# Deploy:

https://front-end-currency-wallet-production.up.railway.app/

# Resumo do projeto:

<p>O Currency Wallet Γ© uma aplicaΓ§Γ£o front-end que, ao consumir uma API, Γ© capaz de registrar gastos em varias moedas, converter para real e informar o valor total das despesas.</p>

<h3>Principais funcionalidades:</h3>

  - Fazer login (com algum email em formato vΓ‘lido e qualquer senha com mais de 6 caracteres);
  - Adicionar e remover um gasto;
  - Visualizar uma tabelas com seus gastos;
  - Visualizar o total de gastos convertidos para uma moeda de escolha;

# Ferramentas utilizadas:

 - Store Redux na aplicaΓ§Γ΅es React
 - Reducers no Redux na aplicaΓ§Γ£o React
 - Actions no Redux na aplicaΓ§Γ£o  React
 - Dispatchers no Redux na aplicaΓ§Γ£o React
 - Conectar o Redux aos componentes React
 - UtilizaΓ§Γ£o de actions assΓ­ncronas na aplicaΓ§Γ£o React utilizando de Redux.

# Sobre a API de conversΓ£o de moedas:

<p>A aplicaΓ§Γ£o consome a API do awesomeapi que permite realizar a busca de cΓ’mbio de moedas. O seguinte endpoint Γ© consultado: </p>

- https://economia.awesomeapi.com.br/json/all

O endpoint retorna dados no formato abaixo:

```
{
   {
     "USD": {
       "code":"USD",
       "codein":"BRL",
       "name":"DΓ³lar Americano/Real Brasileiro",
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
Para mais informaΓ§Γ΅es sobre a API, veja a [documentaΓ§Γ£o](https://docs.awesomeapi.com.br/api-de-moedas).
# Tela de Login:

<img src='./public/loginWallet.png' alt='loginImage' width='500'/>

# Tela de registro de despesas:

<img src='./public/LoginWalletTable.png' alt='tableImage' width='500'/>

# Como rodar o projeto:

<p>Siga os passos abaixo para rodar o projeto! π</p>

- git clone
- npm install
- npm start