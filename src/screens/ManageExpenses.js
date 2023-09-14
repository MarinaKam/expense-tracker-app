import { useContext, useLayoutEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from '../components/Buttons';
import { ExpenseForm } from '../components/ManageExpense';
import { ExpensesContext } from '../store';
import { globalStyles } from '../theme';

export const ManageExpenses = ({ route, navigation }) => {
  const { expenses, fetchExpenses, addExpense, updateExpense, deleteExpense } =
    useContext(ExpensesContext);
  const id = route?.params?.expenseId;
  const isEditing = !!id;
  const selectedExpense = useMemo(
    () => expenses?.find((expense) => expense?.id === id) || null,
    [id]
  );

  const deleteHandler = () => {
    deleteExpense(id);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expenseData) => {
    if (isEditing) {
      updateExpense(id, expenseData);
    } else {
      addExpense(expenseData);
    }
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValues={selectedExpense}
        submitLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={globalStyles.colors.error500}
            size={24}
            onPress={deleteHandler}
          />
        </View>
      )}
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
    borderTopColor: globalStyles.colors.primary100,
    alignItems: 'center',
  },
});
