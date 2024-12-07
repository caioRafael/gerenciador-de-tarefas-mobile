import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ITask } from "../../interfaces/tasks";

interface ParticipantProps{
    task: ITask
    onRemove: () => void
    onMarkCompleted: () => void
    hasCompletedButton: boolean
}

export function Task({task, onRemove, hasCompletedButton, onMarkCompleted}: ParticipantProps){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {task.name}
            </Text>

            {hasCompletedButton &&
                <TouchableOpacity 
                    style={styles.confirmButton}
                    onPress={onMarkCompleted}
                >
                    <Text style={styles.confirmButtonText}>
                        Ok
                    </Text>
                </TouchableOpacity>
            }
            
            <TouchableOpacity 
                style={styles.button}
                onPress={onRemove}
            >
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}