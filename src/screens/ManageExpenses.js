import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, IconButton } from '../components/Buttons';
import { globalStyles } from '../theme';

export const ManageExpenses = ({ route, navigation }) => {
  const id = route?.params?.expenseId;
  const isEditing = !!id;

  const deleteExpense = () => {
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button mode="flat" style={styles.button} onPress={cancelHandler}>
          Cancel
        </Button>

        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={globalStyles.colors.error500}
            size={24}
            onPress={deleteExpense}
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: globalStyles.colors.primary100,
    alignItems: 'center',
  },
});
