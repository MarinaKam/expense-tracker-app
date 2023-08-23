import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AllExpenses, RecentExpenses } from '../screens';
import { globalStyles } from '../theme';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: globalStyles.colors.primary500,
        },
        headerTintColor: globalStyles.colors.common.white,
        tabBarStyle: {
          backgroundColor: globalStyles.colors.primary500,
        },
        tabBarActiveTintColor: globalStyles.colors.common.white,
        tabBarInactiveTintColor: globalStyles.colors.gray100,
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
