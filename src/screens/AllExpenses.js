import { useContext } from 'react';
import { ExpensesOutput } from '../components';
import { ExpensesContext } from '../store';

export const AllExpenses = () => {
  const { expenses } = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expenses}
      periodName="Total"
      fallbackText="No registered expenses found"
    />
  );
};
