// Coloque aqui suas actions
export const saveUserEmail = (email) => ({
  type: 'SET_USER_EMAIL',
  payload: email,
});

export const addCurrency = (currencies) => ({
  type: 'ADD_CURRENCY',
  payload: currencies,
});

export const addExpense = (expenses) => ({
  type: 'ADD_EXPENSE',
  payload: expenses,
});
