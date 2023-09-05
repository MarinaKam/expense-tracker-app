import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../theme';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export const ExpensesOutput = ({ expenses = [], periodName, fallbackText }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />

      {!expenses?.length ? (
        <Text style={styles.infoText}>{fallbackText || 'No expenses found'}</Text>
      ) : (
        <ExpensesList expenses={expenses} />
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    backgroundColor: globalStyles.colors.primaryA100,
    flex: 1,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
