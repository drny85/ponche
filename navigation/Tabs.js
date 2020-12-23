import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { COLORS, images, icons } from "../constants";
import { Favorites, Home, Orders } from "../screens";
import { View, Image } from "react-native";
import HomeStack from "../navigation/HomeStacks";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{}}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case "Favorites":
              return (
                <MaterialIcons name='favorite' size={size} color={tintColor} />
              );

            case "Main":
              return <Entypo name='home' size={size} color={tintColor} />;

            case "Orders":
              return (
                <Image
                  source={icons.orders}
                  style={{
                    tintColor: tintColor,
                    resizeMode: "contain",
                    height: size,
                  }}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen
        name='Main'
        component={HomeStack}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen name='Favorites' component={Favorites} />
      <Tab.Screen name='Orders' component={Orders} />
    </Tab.Navigator>
  );
};

export default Tabs;
