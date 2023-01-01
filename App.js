import { Fragment, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
export default function App() {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState([]);
  const onChangeTextHandler = function (input) {
    setInputText(input);
  };
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
    setInputText("");
  };
  return (
    <Fragment>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeTextHandler}
          style={styles.textInput}
          placeholder="To Do"
          value={inputText}
        />
        <Button title="Add" color={"#5C1FCE"} onPress={onPressHandler} />
      </View>
      <ScrollView>
        {task
          .map((item) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item.text}</Text>
            </View>
          ))
          .reverse()}
      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: "#d4d6d5",
    color: "#000",
    width: 150,
    borderRadius: 10,
    marginRight: 15,
    height: 50,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#a4abe0",
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
  taskText: {
    color: "#000",
  },
});
