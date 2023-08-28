import { FlatList } from 'react-native';
import { ExpenseItem } from './ExpenseItem';

export const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ExpenseItem {...item} />}
      numColumns={1}
      contentContainerStyle={{
        paddingBottom: 12,
        paddingTop: 6,
      }}
    />
  );
};
