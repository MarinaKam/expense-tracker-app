import { FlatList } from 'react-native';
import { ExpenseItem } from './ExpenseItem';

export const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ExpenseItem item={item} />}
      numColumns={1}
    />
  );
};
