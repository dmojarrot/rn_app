import { View, Text } from "react-native";
import React from "react";

export default function DetailView({ route, navigation }) {
  const { id, name, age, description, work } = route.params;
  return (
    <View key={id}>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{description}</Text>
      <Text>{work}</Text>
    </View>
  );
}
