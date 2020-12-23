import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";

const Favorites = () => {
  return (
    <Screen style={styles.container}>
      <Text>Favorites</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Favorites;
