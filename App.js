import { Fragment, useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Pressable,
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
            <Pressable
              style={styles.taskContainer}
              key={item.key}
            >
              <Text style={styles.taskText}>{item.text}</Text>
            </Pressable>
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
    height: 50,
    borderRadius: 10,
    marginRight: 15,
    paddingLeft:5
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#a4abe0",
  },
  taskText: {
    color: "#000",
  },
  doneTask: {
    backgroundColor: "green",
    color: "#fff",
  },
});
