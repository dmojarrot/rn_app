import { StyleSheet, View, Button } from "react-native";
import React from "react";
const data = [
  {
    id: 1,
    name: "Diego",
    age: 23,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    work: "Frontend",
  },
  {
    id: 2,
    name: "Gabriel",
    age: 25,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    work: "Backend",
  },
  {
    id: 3,
    name: "Lucas",
    age: 30,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    work: "Fullstack",
  },
  {
    id: 4,
    name: "Pedro",
    age: 20,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    work: "Frontend",
  },
  {
    id: 5,
    name: "João",
    age: 21,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    work: "Backend",
  },
];

export default function MainView({ navigation }) {
  return (
    <View>
      {data.map((item) => {
        return (
          <View style={styles.container} key={item.id}>
            <Button
              key={item.id}
              title={item.name}
              onPress={() =>
                navigation.navigate("DetailView", {
                  id: item.id,
                  name: item.name,
                  age: item.age,
                  description: item.description,
                  work: item.work,
                })
              }
            ></Button>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});
