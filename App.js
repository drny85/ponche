import { StatusBar } from "expo-status-bar";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Tabs from "./navigation/Tabs";
import { Welcome } from "./screens";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: null }}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Home' component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
