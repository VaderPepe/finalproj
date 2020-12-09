import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TextInput } from 'react-native';
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
        Login
      </Text>

      <Input label="Username:" />


      <Input label="Password:" secureTextEntry/>

    </View>
  );
}
export {App};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInputContainer: {
    alignSelf: 'stretch',
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
