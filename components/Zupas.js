import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function SecondScreen({route, navigation}) {

  const { id, title} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>id: {JSON.stringify(id)}</Text>
      <Text>title: {JSON.stringify(title)}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
