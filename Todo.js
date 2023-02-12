import { Fragment, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
} from "react-native";
import { addTodo, removeTodo } from "./redux/taskSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Todo() {
  const [inputText, setInputText] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const onChangeTextHandler = (input) => {
    setInputText(input);
  };
  const addTodoHandler = () => {
    if (inputText.trim() === "") {
      alert("Please enter your task");
    } else {
      dispatch(addTodo(inputText.trim()));
    }
    setInputText("");
  };
  const deleteTaskHandler = () => {
    console.log("delete");
    
  };

  return (
    <Fragment>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={onChangeTextHandler}
            style={styles.textInput}
            placeholder="To Do"
            value={inputText}
          />
          <Pressable style={styles.btn} onPress={addTodoHandler}>
            <Text style={styles.btnText}>Add Task</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.taskContainer}>
        <FlatList
          style={{ flex: 1 }}
          data={todos}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.taskComponent}>
                <Text style={styles.taskText}>{`${index + 1}. ${
                  item.text
                }`}</Text>
                <Pressable style={styles.doneBtn} onPress={deleteTaskHandler}>
                  <Text>Delete</Text>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
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
    backgroundColor: "#fcd7b3",
    color: "#000",
    width: 200,
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
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#fc5a5c",
  },
  taskComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    padding: 15,
    marginBottom: 8,
  },
  taskText: {
    color: "#000",
    fontSize: 16,
  },
  doneBtn: {
    padding: 8,
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#80ff80",
  },
});
