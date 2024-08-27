import {Feather} from '@expo/vector-icons'
import {Container, TaskText, TaskDone, TaskDelete} from './styles'

export function Task(){
     return (
       <Container>
         <TaskDone>
           <Feather name="square" sinze={34} color="white" />
         </TaskDone>
         <TaskText>Tarefa</TaskText>
         <TaskDelete>
           <Feather name="trash-2" sinze={34} color="white" />
         </TaskDelete>
       </Container>
     );
}