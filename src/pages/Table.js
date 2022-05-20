import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';

class Table extends Component {
  handleDeleteBtn = ({ target }) => {
    const { rmExpense } = this.props;
    // console.log(target.value);
    rmExpense(target.value);
  };

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        Table
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ parseFloat(expense.value).toFixed(2) }</td>
                <td>
                  { (expense.exchangeRates[expense.currency].name).split('/')[0] }
                  { /* pega a primeira parte do nome da moeda */ }
                </td>
                <td>
                  { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
                </td>
                <td>
                  { parseFloat((expense.value)
                  * (expense.exchangeRates[expense.currency].ask)).toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    value={ expense.id }
                    data-testid="delete-btn"
                    onClick={ this.handleDeleteBtn }
                  >
                    Excluir
                  </button>
                </td>
              </tr>)) }
          </tbody>
        </table>
      </div>
    );
  }
}
// ref table structure: https://www.valentinog.com/blog/html-table/
const mapStateToProps = (globaState) => ({
  expenses: globaState.wallet.expenses,
});

const mapDispatchToProps = (dispatchEvent) => ({
  rmExpense: (id) => dispatchEvent(removeExpense(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  rmExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
