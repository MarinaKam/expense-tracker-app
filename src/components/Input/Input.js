import { StyleSheet, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../theme';

export const Input = ({ label, style, textInputProps }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        {...textInputProps}
        style={[styles.field, textInputProps?.multiline && styles.inputMultiline]}
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
});
