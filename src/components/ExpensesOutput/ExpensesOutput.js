import { StyleSheet, View } from 'react-native';
import { dummyExpenses } from '../../store/expenses/dummyExpenses';
import { globalStyles } from '../../theme';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export const ExpensesOutput = ({ expenses = [], periodName }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={dummyExpenses} periodName={periodName} />
      <ExpensesList expenses={dummyExpenses} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    backgroundColor: globalStyles.colors.primaryA100,
    flex: 1,
  },
});
