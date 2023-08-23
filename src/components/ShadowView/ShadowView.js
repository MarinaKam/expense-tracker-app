import { Platform, StyleSheet, View } from 'react-native';

export const ShadowView = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 9,
    elevation: 4,
    marginVertical: 16,
    marginHorizontal: 12,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
});
