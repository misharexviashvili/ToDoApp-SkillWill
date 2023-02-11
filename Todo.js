import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useDispatch } from "react-redux";
import { saveTodo } from "./redux/taskSlice";
import { useSelector } from "react-redux";

export default function Todo() {
    const smth = useSelector((selector) => selector);
    console.log(smth);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const onChangeTextHandler = (input) => {
    setInputText(input);
  };
  const addTodo = () => {
    if (inputText.trim() === "") {
      alert("You can not add empty todo, please insert text");
    } else {
      console.log(`Adding ${inputText}`);
      dispatch(
        saveTodo({
          item: inputText,
          id: Date.now(),
        })
      );
      setInputText("");
    }
  };
  const deleteButton = (id) => {
    setTask((currentTask) => currentTask.filter((el) => id !== el.id));
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeTextHandler}
          style={styles.textInput}
          placeholder="To Do"
          value={inputText}
        />
        <Pressable style={styles.btn} onPress={addTodo}>
          <Text style={styles.btnText}>Add Task</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#19506e",
    flex: 1,
  },
  inputContainer: {
    marginTop: 50,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: "#fcd7b3",
    color: "#000",
    width: 150,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
    paddingLeft: 5,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    borderColor: "#5dbcfd",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "#fda65d",
    width: 100,
    height: 50,
  },
  btnText: {
    color: "#333",
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#fc5a5c",
  },
  taskText: {
    color: "#000",
  },
  doneBtn: {
    padding: 10,
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#80ff80",
  },
});
