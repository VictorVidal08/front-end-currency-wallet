import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import Header from './Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    const { currenciesArray } = this.props;
    return (
      <div>
        TrybeWallet
        <Header />
        <form>
          <label htmlFor="expense">
            Despesa:
            <input
              type="text"
              name="expense"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="description">
            Descrição despesa:
            <input
              type="text"
              name="description"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="currency">
            moeda
            <select
              id="currency"
            >
              { currenciesArray.map((currency, key) => (
                <option key={ key }>{ currency }</option>
              ))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select
              name="payment"
              data-testid="method-input"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Categoria:
            <select
              name="category"
              data-testid="tag-input"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchAPI()),
});

const mapStateToProps = (globalState) => ({
  currenciesArray: globalState.wallet.currencies,
});

Wallet.propTypes = {
  setCurrencies: propTypes.func.isRequired,
  currenciesArray: propTypes.arrayOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
