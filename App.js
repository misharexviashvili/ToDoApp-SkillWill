import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./Todo";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.rootContainer}>
        <Todo />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#e6eef1",
    flex: 1,
  },
});
