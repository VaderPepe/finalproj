import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Platform, StatusBar, StyleSheet } from "react-native";


export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 4, alignItems: 'center', justifyContent: 'space-evenly' }}>
      <Button
        title="Zupas"
        onPress={() => navigation.navigate('Zupas', {
            id: 789,
            title: 'Text',
          })}
      />
      <Button
        title="Otrie"
        onPress={() => navigation.navigate('Otrie', {
            id: 789,
            title: 'Text',
          })}
      />
      <Button
        title="Saldie"
        onPress={() => navigation.navigate('Saldie', {
            id: 789,
            title: 'Text',
          })}
      />
    </View>
  );
}
