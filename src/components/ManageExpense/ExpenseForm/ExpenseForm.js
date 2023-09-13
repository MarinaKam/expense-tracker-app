import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../../Input';

export const ExpenseForm = () => {
  const handleAmountChange = () => {};
  const handleDateChange = () => {};
  const handleDescriptionChange = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>

      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.inputField}
          textInputProps={{
            keyboardType: 'decimal-pad',
            onChangeText: handleAmountChange,
          }}
        />

        <Input
          label="Date"
          style={styles.inputField}
          textInputProps={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: handleDateChange,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputProps={{
          multiline: true,
          // autoCapitalize: 'none',
          // autoCorrect: false,
          onChangeText: handleDescriptionChange,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 24,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputField: {
    flex: 1,
  },
});
