import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from '../components/Buttons';
import { globalStyles } from '../theme';

export const ManageExpenses = ({ route, navigation }) => {
  const id = route?.params?.expenseId;
  const isEditing = !!id;

  const onDeleteExpense = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={globalStyles.colors.error500}
            size={24}
            onPress={onDeleteExpense}
          />
        </View>
      )}
      <Text>Manage Expenses Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: globalStyles.colors.primaryA100,
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: globalStyles.colors.primary200,
    alignItems: 'center',
  },
});
