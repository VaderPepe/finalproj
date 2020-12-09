import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TextInput, SafeAreaView,
ImageBackground } from 'react-native';
import Constants from 'expo-constants';


function Input(props) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string
}

export default function App() {
  const [changedText, setChangedText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  return (

    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Login to Crust
      </Text>

      <Input label="Username:" />


      <Input label="Password:" secureTextEntry/>

    </View>
  );
}
export {App};
const styles = StyleSheet.create({
  container: {
    flexWrap: 1,
    justifyContent: 'center',
    paddingStart: Constants.statusBarHeight,
    backgroundColor: '#F6CECE',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInputContainer: {
    alignItems: 'stretch',
  },

  textInputLabel: {
    marginBottom: 4,
  },

  textInput: {
    backgroundColor: 'white',
    height: 20,
    fontSize: 11,
  },
});
