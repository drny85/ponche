import React from "react";
import { View, Text } from "react-native";
import Screen from "../components/Screen";

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  console.log(route);
  return (
    <Screen>
      <Text>Product {product.name} </Text>
    </Screen>
  );
};

export default ProductDetails;
