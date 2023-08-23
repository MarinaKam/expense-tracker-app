import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../../theme';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

const dummyExpenses = [
  {
    id: 'a1',
    description: 'Some dummy shoes',
    amount: '61.11',
    date: new Date('2023-08-16'),
  },
  {
    id: 'a2',
    description: 'Some dummy glasses',
    amount: '71.50',
    date: new Date('2023-08-17'),
  },
  {
    id: 'a3',
    description: 'Some gloves',
    amount: '109.00',
    date: new Date('2023-08-18'),
  },
  {
    id: 'a4',
    description: 'Some bananas',
    amount: '2.35',
    date: new Date('2023-08-20'),
  },
  {
    id: 'a5',
    description: 'Some potato',
    amount: '10.35',
    date: new Date('2023-08-21'),
  },
  {
    id: 'a6',
    description: 'Some book',
    amount: '20.65',
    date: new Date('2023-08-22'),
  },
];

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
    padding: 12,
    backgroundColor: globalStyles.colors.primaryA100,
    flex: 1,
  },
});
