import { createContext, useEffect, useReducer, useState } from 'react';
import * as expenseApi from '../../api/expenses';
import { reducer } from './reducer';
import * as types from './types';

export const ExpensesContext = createContext({
  expenses: [],
  fetchExpenses: () => {},
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

export const ExpensesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchExpenses = () => {
    setIsLoading(true);

    expenseApi
      .getExpenses()
      .then((data) => {
        dispatch({ type: types.GET_EXPENSES, payload: data });
        setIsLoading(false);
        setError(null);
      })
      .catch(() => {
        setError('Could not fetch expenses!');
        setIsLoading(false);
      });
  };

  const addExpense = (expense) => {
    expenseApi
      .addExpense(expense)
      .then((data) => {
        dispatch({ type: types.ADD, payload: { id: data?.name, ...expense } });
        setError(null);
      })
      .catch(() => {
        setError('Could not add expense - please try again later!');
      });
  };

  const deleteExpense = (id) => {
    expenseApi
      .deleteExpense(id)
      .then(() => {
        dispatch({ type: types.DELETE, payload: id });
        setError(null);
      })
      .catch(() => {
        setError('Could not delete expense - please try again later!');
      });
  };

  const updateExpense = (id, expense) => {
    expenseApi
      .updateExpense(id, expense)
      .then(() => {
        dispatch({ type: types.UPDATE, payload: { id, expense } });
        setError(null);
      })
      .catch(() => {
        setError('Could not update expense - please try again later!');
      });
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const providerValue = {
    isLoading,
    error,
    expenses: state,

    addExpense,
    fetchExpenses,
    updateExpense,
    deleteExpense,
  };

  return <ExpensesContext.Provider value={providerValue}>{children}</ExpensesContext.Provider>;
};
