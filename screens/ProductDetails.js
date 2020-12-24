import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";


const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;
  const [price, setPrice] = useState(product.price?.large);
  const [isFavorite, setIsFavorite] = useState(false)
  const [size, setSize] = useState('large')
  const sizeHandler = (s) => {
    if (s === "m") {
      setPrice(product.price?.medium);
      setSize('medium')
    }
    if (s === "l") {
      setPrice(product.price?.large);
      setSize('large')
    }
  };

  const addToCart = () => {
    
    console.log("Add to cart pressed");
  };
  useEffect(() => {
    setPrice(product.price?.large);
  }, [product]);

  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: COLORS.white,
            width: 40,
            height: 40,
            borderRadius: 20,
            position: "absolute",
            left: 20,
            top: 60,
            zIndex: 99,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EvilIcons name='close' size={30} color='black' />
        </TouchableOpacity>
        <Image source={product.image} style={styles.img} />
        <View style={{position: 'absolute', bottom: 10, paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent:'space-between', alignItems:'center', width:SIZES.width}}>
        <Text
          style={{
            fontSize: 26,
            color: COLORS.white,
            letterSpacing: 1.1,
            fontWeight: "700",
          }}
        >
          {product.name}
        </Text>
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? ( <AntDesign name="heart" size={30} color={COLORS.primary} />) : (<AntDesign name="hearto" size={30} color={COLORS.white} />)}
       
        </TouchableOpacity>
        </View>
        
      </View>
      {/* Rating and price */}
      <View style={styles.price}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 20,
              paddingRight: 8,
              fontStyle: product.rating ? 'normal' : 'italic',
              color: product.rating ? 'black' : COLORS.lightGray,
            }}
          >
            {product.rating ? product.rating : 'no reviews yet'}
          </Text>
         {product.rating && (<AntDesign name='star' size={24} color={COLORS.primary} />)} 
        </View>

        <Text style={{ fontSize: 20, fontWeight: "700" }}>${price}</Text>
      </View>
      {/* Size selection */}
      <View style={styles.size}>
        <TouchableOpacity
          style={{
            borderTopLeftRadius: SIZES.radius * 3,
            borderBottomLeftRadius: SIZES.radius * 3,
            backgroundColor: size === 'medium' ? COLORS.primary : COLORS.light,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            width: SIZES.width * 0.3,
          }}
          onPress={() => sizeHandler("m")}
        >
          <Text>Medium</Text>
        </TouchableOpacity>
        <View style={{ width: 1, backgroundColor: COLORS.lightGray }}></View>
        <TouchableOpacity
          style={{
            borderBottomRightRadius: SIZES.radius * 3,
            borderTopRightRadius: SIZES.radius * 3,
            backgroundColor: size === 'large' ? COLORS.primary : COLORS.light,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            width: SIZES.width * 0.3,
          }}
          onPress={() => sizeHandler("l")}
        >
          <Text>Large</Text>
        </TouchableOpacity>
      </View>
      {/* Description */}
      <View style={styles.descView}>
        <Text style={{ fontSize: 18 }}>{product.description}</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={addToCart}
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius * 3,
            width: SIZES.width * 0.9,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: COLORS.white,
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgView: {
    width: SIZES.width,
    height: SIZES.height * 0.45,
    borderBottomLeftRadius: SIZES.radius * 3,
    borderBottomRightRadius: SIZES.radius * 3,
  },
  img: {
    resizeMode: "cover",
    borderBottomLeftRadius: SIZES.radius * 3,
    borderBottomRightRadius: SIZES.radius * 3,
    width: SIZES.width,
    height: "100%",
    zIndex: -1,
  },
  descView: {
    padding: SIZES.padding,
  },

  btnView: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
  },

  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.padding,
  },
  size: {
    flexDirection: "row",
    width: SIZES.width,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProductDetails;
