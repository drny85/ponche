import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home, ProductDetails } from "../screens";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: null }} mode='modal'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
