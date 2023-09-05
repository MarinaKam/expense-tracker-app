import { createContext, useReducer } from 'react';
import { dummyExpenses } from './dummyExpenses';
import { reducer } from './reducer';
import * as types from './types';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

export const ExpensesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, dummyExpenses);

  const addExpense = (expense) => {
    dispatch({ type: types.ADD, payload: expense });
  };

  const deleteExpense = (id) => {
    dispatch({ type: types.DELETE, payload: id });
  };

  const updateExpense = (id, expense) => {
    dispatch({ type: types.UPDATE, payload: { id, expense } });
  };

  const providerValue = {
    expenses: state,

    addExpense,
    updateExpense,
    deleteExpense,
  };

  return <ExpensesContext.Provider value={providerValue}>{children}</ExpensesContext.Provider>;
};
