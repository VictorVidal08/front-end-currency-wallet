import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../header.css';

class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    let total = 0;
    expenses.forEach((element) => {
      const coins = Object.entries(element.exchangeRates);
      const conversion = coins.find((coin) => (coin[0] === element.currency));
      total += ((Number(element.value)) * (Number(conversion[1].ask)));
    });

    return (
      <div className="cabecalho">
        <h2
          data-testid="email-field"
        >
          Email:
          { userEmail }
        </h2>
        <div className="value-Container">
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
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(Header);
