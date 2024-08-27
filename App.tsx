import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Alert,
  FlatList,
  InputAccessoryView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Task } from "./src/components/Task";
import { CardNumber } from "./src/components/CardNumber";
import { InputAddTask } from "./src/components/InputAddTask";

export default function App() {
  const [tasks, setTasks] = useState<{ description: string; check: boolean }[]>(
    []
  );
  const [taskText, setTaskText] = useState("");
  const [countTask, setCountTask] = useState(0);

  function handleTaskadd() {
    if (taskText == "") {
      console.log('vazio!')
      return Alert.alert("Erro", "Tarefa sem descrição");
    }
    if (tasks.some((task) => task.description === taskText)) {
      console.log("tarefa já existe");
      return Alert.alert("Erro", "Tarefa já existe");
    }
    const newTask = { description: taskText, check: false };
    setTasks([...tasks, newTask]);
    setTaskText('');
  }
  useEffect(() => {
    let totalTasks = tasks.length;
    setCountTask(totalTasks);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite a tarefa"
          placeholderTextColor="white"
          keyboardType="default"
          onChangeText={setTaskText}
          value={taskText}
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleTaskadd}>
          <Feather name="plus-square" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* <InputAddTask /> */}
      <View style={{ flexDirection: "row", gap: 16 }}>
        <CardNumber />
        <CardNumber />
        <CardNumber />
      </View>
      <Text>Tarefas: {countTask}</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Task />}
        ListEmptyComponent={() => (
          <View>
            <Text>Você aida não cadastrou Tarefas!</Text>
            <Text>Crie uma tarefa para começar</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28385E",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    paddingTop: 64,
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: '#252627',
  },
  input: {
    flex: 1,
    padding: 16,
    color: '#fff',
  },
  inputButton: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 4,
  },
});
