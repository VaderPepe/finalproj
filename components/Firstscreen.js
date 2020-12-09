import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Open Crust"
        onPress={() => navigation.navigate('Second', {
            id: 789,
            title: 'Text',
          })}
      />
    </View>
  );
}
