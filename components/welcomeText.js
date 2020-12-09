import React, { useState } from "react";
import { Text, StyleSheet, View  } from "react-native";

const onPressTitle = () => {
  console.log("title pressed");
};

const WelcomeText = () => {
  const titleText = useState("Welcome to Crust");
  const bodyText = useState("Application that offers you cheap food after 18:00 from nearby restaurants: Bastions, Jaunā Saule, Rimants. All food that is still available after 18:00 will be listed here for sale with 50% off prize then usually. Simply browse, buy and it will be delivered to you.");

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}

      </Text>
      <Text numberOfLines={0}>{bodyText}</Text>
      {"\n"}
      {"\n"}
      {"\n"}
      {"\n"}
      {"\n"}
      {"\n"}
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 0,
    borderColor: "#20232a",
    borderRadius: 0,
    backgroundColor: "#red",
    color: "#red",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  titleText: {
      marginTop: 6,
      paddingVertical: 2,
      borderWidth: 2,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 29,
      fontWeight: "bold"
  }
});

export {WelcomeText};
