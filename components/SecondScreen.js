import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button, BackHandler } from 'react-native';

export default function SecondScreen({navigation}) {
  const [food, setFood] = useState([
    { name: 'Lasagna   (3)', id: '1' },
    { name: 'Pizza     (14)', id: '2' },
    { name: 'Maki rolls  (22)', id: '3' },
    { name: 'Hotdog    (4)', id: '4' },
    { name: 'Soups     (12)', id: '5' },
    { name: 'Chicken wings (5)', id: '6' },
    { name: 'Cream soups (12)', id: '7' },
    { name: 'Risotto (2)', id: '8' },
    { name: 'Desserts (24)', id: '9' },
    { name: 'Hot drinks (9)', id: '10' },
    { name: 'Fruit drinks (12)', id: '11' },
    { name: 'Fizzy drinks (8)', id: '12' },
  ]);


  return (

    <View style={{ flex: 1,backgroundColor: '#F78181', alignItems: 'fill', justifyContent: 'center', }}>
     <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={food}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
       <Button
       color = '#F5DA81'
        title="Go to contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
  
    </View>

  );
}
const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 20,
  }
});
