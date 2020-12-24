import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Screen from "../components/Screen";
import { COLORS, SIZES } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProductCard from "../components/ProductCard";

import data from "../products";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
    return () => {};
  }, []);

  return (
    <Screen style={styles.container}>
      {/* Header */}
      <View style={styles.headerView}>
       
        <TouchableOpacity style={styles.cartView}>
          <MaterialCommunityIcons name='cart-outline' size={30} color='black' />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Que ponche te gustaria probar hoy?</Text>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            width: SIZES.width * 1,
            alignContent: "center",
          }}
          data={products}
          // ItemSeparatorComponent={() => (
          //   <View
          //     style={{
          //       height: 1,
          //       backgroundColor: COLORS.light,
          //       width: SIZES.width,
          //     }}
          //   ></View>
          // )}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard
              onPress={() =>
                navigation.navigate("ProductDetails", { product: item })
              }
              product={item}
            />
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerView: {
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: SIZES.padding,
  },
  cartView: {
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 11,
    backgroundColor: COLORS.light,
    justifyContent: "center",
    position:'absolute',
    right: 20,
    top: 10,
    alignItems: "center",
  },
  title: {
    fontStyle: "italic",
    fontSize: 22,
    lineHeight: 20,
    textAlign: "center",
    padding: SIZES.padding,
  },
});

export default Home;
