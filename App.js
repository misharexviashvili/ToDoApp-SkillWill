import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Input from "./components/Input";
export default function App() {
  return (
    <View style={styles.container}>
      <Input style={styles.input} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  input: {
    backgroundColor: "blue",
  },
});
