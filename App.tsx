import { StatusBar } from "expo-status-bar";
//Importando Hooks
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
//Importe de componentes nativos do react-native
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
//Importe de componentes estilizados
import { Task } from "./src/components/Task";
import { CardNumber } from "./src/components/CardNumber";
import { InputAddTask } from "./src/components/InputAddTask";
import styled from 'styled-components/native';


//Iniciando a aplicação
export default function App() {
  //Hook para armazenar e atualizar lista de tarefas
  const [tasks, setTasks] = useState<{ description: string; check: boolean }[]>([]);
  //Hook para modificar o estado
  const [taskText, setTaskText] = useState("");
  //Hook para modificar a quantidade de tarefas
  const [countTask, setCountTask] = useState(0);

  //Função do Botão de adição de tarefas
  function handleTaskadd() {
    if (taskText == "") {
      console.log("vazio!");
      return Alert.alert("Erro", "Tarefa sem descrição");
    }
    if (tasks.some((task) => task.description === taskText)) {
      console.log("tarefa já existe");
      return Alert.alert("Erro", "Tarefa já existe");
    }
    const newTask = { description: taskText, check: false };
    setTasks([...tasks, newTask]);
    setTaskText("");
  }
  // -- HOOK SETANDO CONTADOR
  useEffect(() => {
    let totalTasks = tasks.length;
    setCountTask(totalTasks);
  }, [tasks]);

  // -- OS COMPONENTES DA APLICAÇÃO SÃO ORGANIZADOS AQUI
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <InputAddTask onPress={handleTaskadd} onChangeText={setTaskText} value={taskText}/>
     

      <View style={{ flexDirection: "row", gap: 16 }}>
        <CardNumber />
        <CardNumber />
        <CardNumber />
      </View>
      <Text>Tarefas: {countTask}</Text>

      {/* Exibir uma lista de objetos */}
      <View style={styles.tasks}>
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Task />}
          ListEmptyComponent={() => (
            <View>
              <Text>Você ainda não cadastrou Tarefas!</Text>
              <Text>Crie uma tarefa para começar</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}





// --ESTILOS DA APLICAÇÃO
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
  tasks:{
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: "column"
  }
});



   /* <View style={styles.inputContainer}>
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
      </View> */
