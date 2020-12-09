import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import SecondScreen from './components/SecondScreen';
import Firstscreen from './components/Firstscreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }}/>
        <Stack.Screen name="Second" component={SecondScreen} options={{ title: 'Second Screen' }} />
        <Stack.Screen name="Firstscreen" component={Firstscreen} options={{ title: 'Firstscreen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
