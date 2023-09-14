import { StyleSheet, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../theme';

export const Input = ({ label, style, invalid, textInputProps }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>

      <TextInput
        {...textInputProps}
        style={[
          styles.field,
          textInputProps?.multiline && styles.inputMultiline,
          invalid && styles.invalidField,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: globalStyles.colors.primary50,
    marginBottom: 4,
  },
  field: {
    backgroundColor: globalStyles.colors.primary50,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: globalStyles.colors.primaryA400,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: globalStyles.colors.error500,
  },
  invalidField: {
    borderColor: globalStyles.colors.error500,
    borderWidth: 1,
  },
});
