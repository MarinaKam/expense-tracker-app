import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}
