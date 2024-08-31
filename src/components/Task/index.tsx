//importando ícones
import { Feather } from "@expo/vector-icons";
//Importando os estilos
import { Container, TaskText, TaskDone, TaskDelete } from "./styles";

export function Task() {
  return (
    <Container>
      <TaskDone>
        <Feather name="square" sinze={24} color="white" />
      </TaskDone>
      <TaskText>Tarefa</TaskText>
      <TaskDelete>
        <Feather name="trash-2" sinze={24} color="white" />
      </TaskDelete>
    </Container>
  );
}
