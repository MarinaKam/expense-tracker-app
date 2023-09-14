import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../../theme';
import { getFormattedDate } from '../../../utils';
import { Button } from '../../Buttons';
import { Input } from '../../Input';

export const ExpenseForm = ({ defaultValues, submitLabel, onSubmit, onCancel }) => {
  const [formValues, setFormValues] = useState({
    amount: {
      value: `${defaultValues?.amount || ''}`,
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues?.description || '',
      isValid: true,
    },
  });

  const handleChange = (value, name) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: { value, isValid: true } }));
  };

  const handleSubmit = () => {
    const expenseData = {
      amount: +formValues.amount?.value,
      date: new Date(formValues.date?.value),
      description: formValues.description?.value,
    };

    const amountIsValid = !isNaN(expenseData?.amount) && expenseData?.amount > 0;
    const dateIsValid = expenseData?.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData?.description?.trim()?.length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setFormValues((prevFormValues) => ({
        amount: {
          value: prevFormValues?.amount?.value,
          isValid: amountIsValid,
        },
        date: {
          value: prevFormValues?.date?.value,
          isValid: dateIsValid,
        },
        description: {
          value: prevFormValues?.description?.value,
          isValid: descriptionIsValid,
        },
      }));

      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid =
    !formValues?.amount?.isValid || !formValues?.date?.isValid || !formValues?.description?.isValid;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>

      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.inputField}
          invalid={!formValues?.amount?.isValid}
          textInputProps={{
            value: formValues?.amount?.value,
            keyboardType: 'decimal-pad',
            onChangeText: (val) => handleChange(val, 'amount'),
          }}
        />

        <Input
          label="Date"
          style={styles.inputField}
          invalid={!formValues?.date?.isValid}
          textInputProps={{
            value: formValues?.date?.value,
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: (val) => handleChange(val, 'date'),
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!formValues?.description?.isValid}
        textInputProps={{
          value: formValues?.description?.value,
          multiline: true,
          // autoCapitalize: 'none',
          // autoCorrect: false,
          onChangeText: (val) => handleChange(val, 'description'),
        }}
      />

      {formIsInvalid && (
        <Text style={styles.errorText}>Invalid input values - please check your data!</Text>
      )}

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
  errorText: {
    color: globalStyles.colors.error500,
    textAlign: 'center',
    margin: 8,
  },
});
