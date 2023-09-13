import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../Buttons';
import { Input } from '../../Input';

export const ExpenseForm = ({ submitLabel, onSubmit, onCancel }) => {
  const [formValues, setFormValues] = useState({
    amount: '',
    date: '',
    description: '',
  });

  const handleChange = (val, name) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: val }));
  };

  const handleSubmit = () => {
    const expenseData = {
      amount: +formValues.amount,
      date: new Date(formValues.date),
      description: formValues.description,
    };

    onSubmit(expenseData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>

      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.inputField}
          textInputProps={{
            value: formValues?.amount,
            keyboardType: 'decimal-pad',
            onChangeText: (val) => handleChange(val, 'amount'),
          }}
        />

        <Input
          label="Date"
          style={styles.inputField}
          textInputProps={{
            value: formValues?.date,
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: (val) => handleChange(val, 'date'),
          }}
        />
      </View>
      <Input
        label="Description"
        textInputProps={{
          value: formValues?.description,
          multiline: true,
          // autoCapitalize: 'none',
          // autoCorrect: false,
          onChangeText: (val) => handleChange(val, 'description'),
        }}
      />

      <View style={styles.buttonsContainer}>
        <Button mode="flat" style={styles.button} onPress={onCancel}>
          Cancel
        </Button>

        <Button style={styles.button} onPress={handleSubmit}>
          {submitLabel}
        </Button>
      </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
