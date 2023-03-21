import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Cart() {
  return (
    <View style={styles.Container}>
      <Text>Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
