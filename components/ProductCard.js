import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { COLORS, SIZES } from "../constants";

const ProductCard = ({ onPress, product }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={product.image} style={styles.img} />
      <View style={styles.desc}>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.text}>
          ${product.price.medium} - ${product.price.large}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.4,
    borderRadius: SIZES.radius * 3,
    backgroundColor: COLORS.light,
    marginVertical: 12,
    marginHorizontal: 8,
    shadowOffset: {
      width: 2,
      height: 8,
    },
    elevation: 7,
    shadowOpacity: 0.43,
    shadowColor: "rgba(0,0,0,0.5)",
  },

  img: {
    resizeMode: "cover",
    height: "80%",
    width: "100%",
    borderTopLeftRadius: SIZES.radius * 3,
    borderTopRightRadius: SIZES.radius * 3,
  },
  desc: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: "20%",
    paddingHorizontal: 8,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: SIZES.radius * 3,
    borderBottomRightRadius: SIZES.radius * 3,
  },

  text: {
    fontSize: 24,
  },
});

export default ProductCard;
