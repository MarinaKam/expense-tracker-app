import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../theme';
import { getFormattedDate } from '../../utils';
import { ShadowView } from '../ShadowView';

export const ExpenseItem = ({ description, amount, date, onPress = () => {} }) => {
  return (
    <ShadowView>
      <Pressable style={({ pressed }) => (pressed ? styles.itemPressed : null)} onPress={onPress}>
        <View style={styles.item}>
          <View style={styles.dateContainer}>
            <Text
              // numberOfLines={1}
              style={[styles.textBase, styles.description]}
            >
              {description}
            </Text>
            <Text numberOfLines={1} style={styles.textBase}>
              {getFormattedDate(date)}
            </Text>
          </View>

          <View style={styles.amountContainer}>
            <Text numberOfLines={1} style={styles.amount}>
              ${amount?.toFixed(2)}
            </Text>
          </View>
        </View>
      </Pressable>
    </ShadowView>
  );
};

export const styles = StyleSheet.create({
  item: {
    padding: 12,
    width: '100%',
    backgroundColor: globalStyles.colors.primaryA700,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    overflow: 'hidden',
  },
  itemPressed: {
    opacity: 0.5,
  },
  textBase: {
    color: globalStyles.colors.primary50,
    overflow: 'hidden',
  },
  dateContainer: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    paddingRight: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '500',
  },
  amountContainer: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    minWidth: 90,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    maxHeight: 40,
  },
  amount: {
    color: globalStyles.colors.primary500,
    fontWeight: '700',
  },
});
