import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

export default function CardItem({ data, addAmount, removeAmount }) {
  const [amount, setAmount] = useState(data?.amount);

  function handleIncreaseItem() {
    addAmount();
    setAmount((item) => item + 1);
  }

  function handleDecreaseItem() {
    removeAmount();
    setAmount((item) => item - 1);
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
      </View>
      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecreaseItem}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.amount}>{amount}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncreaseItem}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
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
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    fontSize: 16,
  },
  amountContainer: {
    marginVertical: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    marginHorizontal: 14,
  },
  button: {
    backgroundColor: "#168fff",
    padding: 6,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 2,
  },
});
