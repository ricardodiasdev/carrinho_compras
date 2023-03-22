import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Product({ data, addToCart }) {
  const { name, price } = data;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text>R$ {price.toFixed(2)} </Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={addToCart}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#DFDFDF",
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
  button: {
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: "#168fff",
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 2,
  },
});
