import { api } from './api';

export const getExpenses = (config) => {
  return api
    .get('/expenses.json', config)
    .then(({ data }) => {
      const expenses = [];

      for (const key in data) {
        const expenseObj = {
          id: key,
          amount: data[key].amount,
          date: new Date(data[key].date),
          description: data[key].description,
        };
        expenses.push(expenseObj);
      }

      return expenses;
    })
    .catch((error) => {
      console.log('error', error);
      throw error;
    });
};

export const addExpense = (expense) => {
  return api
    .post('/expenses.json', expense)
    .then(({ data }) => data)
    .catch((error) => {
      throw error;
    });
};

export const updateExpense = (id, expense) => {
  return api
    .put(`/expenses/${id}.json`, expense)
    .then(({ data }) => data)
    .catch((error) => {
      throw error;
    });
};

export const deleteExpense = (id) => {
  return api.delete(`/expenses/${id}.json`).catch((error) => {
    throw error;
  });
};
