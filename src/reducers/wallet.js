// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_CURRENCY':
    return { ...state, currencies: action.payload };
  case 'ADD_EXPENSE':
    return { ...state, expenses: [...state.expenses, action.payload] };
  case 'RM_EXPENSE':
    return { ...state,
      expenses:
        state.expenses.filter((expense) => Number(expense.id)
        !== Number(action.payload)) };
    // Number necessário para a comparação das variáveis ser compatível (number e string por ex...)
  default:
    return state;
  }
};

export default wallet;
