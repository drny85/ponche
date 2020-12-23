import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, images, SIZES } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.constainer}>
      {/* Image View */}
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.4)", "blue", "transparent"]}
        style={styles.imgView}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.3, y: 0.7 }}
      >
        <Image style={styles.img} source={images.welcome} />
        <Text
          style={{
            fontSize: 18,
            fontStyle: "italic",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: SIZES.height * 0.5,
            left: 10,
            right: 10,
            textAlign: "center",
            color: COLORS.lightGray,
          }}
        >
          Deliciosos ponshes Dominicanos!
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.primary,
            position: "absolute",
            bottom: SIZES.height * 0.2,
            left: 10,
            right: 10,
            marginHorizontal: SIZES.padding,
            height: 50,
            zIndex: 99,
            borderRadius: SIZES.radius * 3,
          }}
        >
          <Text style={{ fontSize: 20, color: COLORS.white }}>
            Pruebalo Ya!
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* Welcome Text View */}
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    zIndex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  imgView: {
    // width: SIZES.width,
    // height: SIZES.height * 0.55,
    // borderBottomLeftRadius: SIZES.radius * 3,
    // borderBottomRightRadius: SIZES.radius * 3,
  },
  img: {
    resizeMode: "cover",
    height: SIZES.height,
    width: SIZES.width,
  },
});

export default Welcome;
