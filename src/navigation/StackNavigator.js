import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ManageExpenses } from '../screens';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExpensesOverview"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
    </Stack.Navigator>
  );
}
