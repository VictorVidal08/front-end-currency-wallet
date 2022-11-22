import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './index.css';

function App() {
  return (
    <div>
      <div className="titleContainer">
        <img src="./dollar-sign.png" alt="dollarSign" className="moneyImg" />
        <h1 className="helloClass">Currency Wallet!</h1>
        <img src="./money-bag.png" alt="moneyBag" className="moneyImg" />
      </div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    </div>
  );
}

export default App;
