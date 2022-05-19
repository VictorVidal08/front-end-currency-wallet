import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchExpenses } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleButton = () => {
    const { setExpenses } = this.props;
    setExpenses(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '', // remove o valor dos campos
    }));
    // console.log(this.state);
  }

  render() {
    const { description, value, method, tag, currency } = this.state;
    const { currenciesArray } = this.props;
    return (
      <div>
        Form
        <form>
          <label htmlFor="value">
            Valor Despesa:
            <input
              type="text"
              name="value"
              value={ value }
              onChange={ this.handleChange }
              data-testid="value-input"
            />
          </label>
          <label htmlFor="description">
            Descrição despesa:
            <input
              type="text"
              name="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            moeda
            <select
              id="currency"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              { currenciesArray.map((oneCurrency, key) => (
                <option key={ key } value={ oneCurrency }>{ oneCurrency }</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select
              id="method"
              name="method"
              value={ method }
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              id="tag"
              name="tag"
              value={ tag }
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.handleButton }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (state) => dispatch(fetchExpenses(state)), // passa o estado (state) de form para a fetchExpenses na actions
});

const mapStateToProps = (globalState) => ({
  currenciesArray: globalState.wallet.currencies,
});

Form.propTypes = {
  currenciesArray: propTypes.arrayOf(propTypes.string).isRequired,
  setExpenses: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
