import { useContext, useMemo } from 'react';
import { ExpensesOutput } from '../components';
import { ExpensesContext } from '../store';
import { getDateMinusDays } from '../utils';

export const RecentExpenses = () => {
  const { expenses } = useContext(ExpensesContext);
  const recentExpenses = useMemo(() => {
    return expenses?.filter((expense) => {
      const today = new Date();
      const date7DaysAgo = getDateMinusDays(today, 7);

      return expense.date > date7DaysAgo && expense.date <= today;
    });
  }, [expenses]);

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
};
