import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { WelcomeText } from './welcomeText';

export default function HomeScreen({ navigation }) {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <WelcomeText/>
      <Button
        title="Open Crust"
        onPress={() => navigation.navigate('HomeScreen', {
            id: 789,
            title: 'Text',
          })}
      />

    </View>


  );
}
