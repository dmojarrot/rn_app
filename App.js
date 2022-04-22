import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainView from "./components/MainView";
import DetailView from "./components/DetailView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainView} />
        <Stack.Screen name="DetailView" component={DetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
