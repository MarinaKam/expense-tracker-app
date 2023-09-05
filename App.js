import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StackNavigator } from './src/navigation';
import { ExpensesProvider } from './src/store';

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <ExpensesProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ExpensesProvider>
    </>
  );
}
