import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Platform, StatusBar, StyleSheet } from "react-native";
import { App } from './login';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 4, alignItems: 'center', justifyContent: 'space-evenly' }}>
    <App/>
      <Button
        title="Accept"
        onPress={() => navigation.navigate('Second', {
            id: 789,
            title: 'Text',
          })}
      />

    </View>
  );
}
