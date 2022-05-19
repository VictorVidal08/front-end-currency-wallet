import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    let total = 0;
    // console.log(expenses);
    expenses.forEach((element) => {
      // console.log(element);
      const coins = Object.entries(element.exchangeRates);
      // console.log(coins);
      const conversion = coins.find((coin) => (coin[0] === element.currency));
      // console.log(conversion[1].ask);
      total += ((Number(element.value)) * (Number(conversion[1].ask))); // multiplica pelo coeficiente asf para converter para BRL
    });
    // ref Object.entries https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    return (
      <div>
        Header
        <h2
          data-testid="email-field"
        >
          Email:
          { userEmail }
        </h2>
        <h2
          data-testid="total-field"
        >
          { total.toFixed(2) }
        </h2>
        <h2
          data-testid="header-currency-field"
        >
          BRL
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  userEmail: globalState.user.email,
  expenses: globalState.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps)(Header);
