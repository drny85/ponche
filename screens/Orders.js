import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";

const Orders = () => {
  return (
    <Screen style={styles.container}>
      <Text>Orders</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Orders;
