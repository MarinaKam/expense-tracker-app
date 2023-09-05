import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../theme';

export const Button = ({ children, mode, style, onPress }) => {
  return (
    <View style={style}>
      <Pressable style={({ pressed }) => (pressed ? styles.pressed : null)} onPress={onPress}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: globalStyles.colors.primaryA700,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: globalStyles.colors.primary50,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: globalStyles.colors.primary100,
    borderRadius: 4,
  },
});
