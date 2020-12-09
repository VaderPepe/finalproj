import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={{
          uri:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.L2WiB_XxDRamg9eaEwUTzAHaE7%26pid%3DApi&f=1',
        }}>
        <View style={styles.container}>

          <Text style={styles.title}>
             WELCOME TO OUR APP!
          </Text>
          <View style={styles.contentCenter}>
            <Image
              source={{
                uri:
                  'https://i.postimg.cc/LXDHpVF4/output-onlinepngtools.png',
              }}
              style={{
                width: 300,
                height: 70,
                marginTop: 100
              }}
            />
            <Text style={styles.textStyle}>
              Welcome to Crust

Application that offers you cheap food after 18:00 from nearby restaurants: Bastions, Jaunā Saule, Rimants.

All food that is still available after 18:00 will be listed here for sale with 50% off prize then usually.
Simply browse, buy and it will be delivered to you.

            </Text>

          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export {App};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    padding: 50,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
  }
});
