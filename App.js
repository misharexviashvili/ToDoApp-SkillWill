import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./Todo";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Todo />
      </View>
    </Provider>
  );
}
