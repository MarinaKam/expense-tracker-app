import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../../theme';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export const ExpensesOutput = ({ expenses = [], periodName }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList expenses={expenses} />
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
