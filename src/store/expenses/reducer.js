import { createHookReducer } from '../../hooks';
import * as types from './types';

export const reducer = createHookReducer({
  [types.GET_EXPENSES]: (state, payload) => payload.reverse(),

  [types.ADD]: (state, payload) => {
    return [payload, ...state];
  },

  [types.UPDATE]: (state, { id, expense }) => {
    return state.map((item) => (item.id === id ? { ...item, ...expense } : item));
  },

  [types.DELETE]: (state, expenseID) => {
    return state.filter(({ id }) => expenseID !== id);
  },
});
