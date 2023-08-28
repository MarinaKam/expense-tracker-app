import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ManageExpenses } from '../screens';
import { globalStyles } from '../theme';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: globalStyles.colors.primaryA700,
        },
        headerTintColor: globalStyles.colors.common.white,
      }}
    >
      <Stack.Screen
        name="ExpensesOverview"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManageExpenses"
        component={ManageExpenses}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}
