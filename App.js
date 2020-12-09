import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import SecondScreen from './components/SecondScreen';
import Firstscreen from './components/Firstscreen';
import Zupas from './components/Zupas';
import Saldie from './components/Saldie';
import Otrie from './components/Otrie';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Firstscreen" component={Firstscreen} options={{ title: 'Welcome to Crust' }}/>
        <Stack.Screen name="Second" component={SecondScreen} options={{ title: 'Second Screen' }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'HomeScreen' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
