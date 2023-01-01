import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
export default function Input() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="To do" />
      <Button title="add" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#777",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
    width: 200,
  },
});
