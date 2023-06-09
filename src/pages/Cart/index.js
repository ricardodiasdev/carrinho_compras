import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CardItem from "../../components/CartItem";

export default function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);
  return (
    <View style={styles.Container}>
      <FlatList
        data={cart}
        showVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => <Text>Nenhum item na lista...</Text>}
        renderItem={({ item }) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() => (
          <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
  },
});
