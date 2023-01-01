import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
export default function App() {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState([]);
  const onChangeTextHandler = function (input) {
    setInputText(input);
  };
  console.log(inputText);
  const onPressHandler = function () {
    setTask((currentInput) => {
      return [
        ...currentInput,
        {
          text: inputText,
          id: Math.random().toString(),
        },
      ];
    });
  };
  console.log(task)
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeTextHandler}
        style={styles.textInput}
        placeholder="To Do"
      />
      <Button title="Add" color={"#5C1FCE"} onPress={onPressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "#777",
    color: "#fff",
    width: 150,
    borderRadius: 10,
    marginRight: 15,
    height: 50,
  },
});
