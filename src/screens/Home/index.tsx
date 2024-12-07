import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { ITask } from "../../interfaces/tasks";
import { Task } from "../../components/Task";

export default function Home(){

    const [tasks, setTasks] = useState<ITask[]>([])
    const [completedTask, setCompletedTask] = useState<ITask[]>([])
    const [taskName, setTaskName] = useState<string>('')
    const [selectedStatusTasks, setSelectedStatusTasks] = useState<'active'| 'completed'>('active')

    const handleAtividadeAdd = () => {
        if(tasks.includes({
            name: taskName,
            isFinished: false
        })){
           return Alert.alert("Atividade existe", "Já existe uma atividade na lista com esse nome!")
        }

        setTasks(state => [...state, {
            name: taskName,
            isFinished: false
        }])
        setTaskName('')
    }

    const handleTaskRemove = (name: string) => {
        Alert.alert("Remover", `Remover o atividade ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(tasks.filter(task => task.name !== name))
                    setCompletedTask(completedTask.filter(task => task.name !== name))
                    Alert.alert('Deletado!')
                }
            },
            {
                text: 'Não',
                style: "cancel"
            }
        ])  
    }

    const handleMarkCompleted = (currentTask: ITask) => {
        Alert.alert('Concluir atividade', 'Deseja marcar essa aticidade como concluida?', [
            {
                text: 'Sim',
                onPress: () => {
                    setCompletedTask(state => [...state, currentTask])
                    setTasks(tasks.filter(task => task.name !== currentTask.name))
                }
            },
            {
                text: 'Não',
                style: "cancel"
            }
        ])
    }

    return(
        <View style={styles.container}>
            <Text style={styles.taskName}>
                Liste suas atividades
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome da atividade"
                    placeholderTextColor={'#6b6b6b'}
                    accessibilityLabel="Nome da atividade"
                    value={taskName}
                    onChangeText={setTaskName}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleAtividadeAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tabButtonsContainer}>
                <TouchableOpacity 
                    style={styles.activeTabButton}
                    onPress={() => setSelectedStatusTasks("active")}
                >
                    <Text style={styles.buttonText}>
                        Ativas
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.completedTabButton}
                    onPress={() => setSelectedStatusTasks("completed")}
                >
                    <Text style={styles.buttonText}>
                        Finaliizadas
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={selectedStatusTasks === "active" ?  tasks : completedTask}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                    <Task 
                        key={item.name} 
                        task={item} 
                        onRemove={() => handleTaskRemove(item.name)}
                        onMarkCompleted={() => handleMarkCompleted(item)}
                        hasCompletedButton={selectedStatusTasks === "active"}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        {selectedStatusTasks === "active" 
                            ? 'Nenhuma atividade ainda? Adicione atividades a sua lista de tarefas.'
                            : 'Nenhuma ativcidade foi concluida ainda'
                        }
                    </Text>
                )}
            />
 
        </View>
    )
}