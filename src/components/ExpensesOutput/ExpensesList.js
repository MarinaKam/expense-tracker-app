import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { ExpenseItem } from './ExpenseItem';

export const ExpensesList = ({ expenses }) => {
  const navigation = useNavigation();

  const handlePress = (id) => () => {
    navigation.navigate('ManageExpenses', {
      expenseId: id,
    });
  };

  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ExpenseItem {...item} onPress={handlePress(item?.id)} />}
      numColumns={1}
      contentContainerStyle={{
        paddingBottom: 12,
        paddingTop: 6,
      }}
    />
  );
};
