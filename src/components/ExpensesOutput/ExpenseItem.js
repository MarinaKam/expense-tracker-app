import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../theme';
import { ShadowView } from '../ShadowView';

export const ExpenseItem = ({ item, onPress = () => {} }) => {
  return (
    <ShadowView>
      <Pressable
        android_ripple={{ color: globalStyles.colors.primary50 }}
        style={({ pressed }) => (pressed ? styles.itemPressed : null)}
        onPress={onPress}
      >
        <View>
          <View>
            <Text>{item?.description}</Text>
            <Text>DATE</Text>
          </View>

          <View>
            <Text>{item?.amount}</Text>
          </View>
        </View>
      </Pressable>
    </ShadowView>
  );
};

export const styles = StyleSheet.create({
  container: {},
  itemPressed: {
    opacity: 0.5,
  },
});
