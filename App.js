import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StackNavigator } from './src/navigation';

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}
