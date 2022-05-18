// Coloque aqui suas actions
export const saveUserEmail = (email) => ({
  type: 'SET_USER_EMAIL',
  payload: email,
});

// export const requestAPI = () => ({ type: REQUEST_API });

export const addCurrency = (currencies) => ({
  type: 'ADD_CURRENCY',
  payload: currencies,
});

export const addExpense = (expenses) => ({
  type: 'ADD_EXPENSE',
  payload: expenses,
});

export function fetchAPI() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currencies = Object.keys(data);
      currencies.splice(currencies.indexOf('USDT'), 1);
      // console.log(currencies);
      dispatch(addCurrency(currencies));
    } catch (error) {
      console.log('erro na requisição');
    }
  };
}

// REF: splice sem saber o index do elemento a ser removido: https://pt.stackoverflow.com/questions/241823/como-remover-um-item-de-um-array-sem-conhecer-o-%C3%ADndice-apenas-o-valor;
