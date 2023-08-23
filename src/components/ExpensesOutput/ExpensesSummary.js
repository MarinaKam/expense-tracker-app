import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../theme';

export const ExpensesSummary = ({ expenses = [], periodName }) => {
  const sum = useMemo(
    () => expenses.reduce((currentSum, expense) => currentSum + (Number(expense?.amount) || 0), 0),
    [expenses]
  );

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.period}>{periodName || ''}</Text>
        <Text style={styles.sum}>${sum?.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  innerContainer: {
    padding: 8,
    backgroundColor: globalStyles.colors.primary50,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  period: {
    fontSize: 14,
    color: globalStyles.colors.primaryA200,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: globalStyles.colors.primaryA400,
  },
});
