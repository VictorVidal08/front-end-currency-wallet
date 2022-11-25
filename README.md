
# 💵 Project Currency Wallet 🤑

<details>
<summary><h1>English Version</h1></summary>


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

<p>A aplicação consome a API do awesomeapi API de Cotações para realizar a busca de câmbio de moedas. O seguinte endpoint é consultado: </p>

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