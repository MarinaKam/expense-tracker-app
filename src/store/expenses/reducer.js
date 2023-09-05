import { createHookReducer } from '../../hooks';
import * as types from './types';

export const reducer = createHookReducer({
  [types.ADD]: (state, payload) => {
    const id = new Date().toString() + Math.random().toString();

    return [{ ...payload, id }, ...state];
  },

  [types.UPDATE]: (state, { id, expense }) => {
    return state.map((item) => (item.id === id ? { ...item, ...expense } : item));
  },

  [types.DELETE]: (state, expenseID) => {
    return state.filter(({ id }) => expenseID !== id);
  },
});
