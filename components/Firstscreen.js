import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { App } from './welcomeText';

export default function HomeScreen({ navigation }) {
  return (

    <View style={{ flex: 1, alignItems: 'fill', justifyContent: 'center' }}>
    <App/>
      <Button
        title="Open Crust" color= 'maroon'

        onPress={() => navigation.navigate('HomeScreen', {
            id: 789,
            title: 'Text',
          })}
      />

    </View>


  );
}
