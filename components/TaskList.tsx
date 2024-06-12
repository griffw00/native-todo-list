import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native'; 
import Task from './Task';

type TaskListProps = {
    tasks: string[];
    onCompleteTask: (index: number) => void;
}

// Specify that TaskList is a Functional Component
const TaskList: React.FC<TaskListProps> = ({ tasks, onCompleteTask }) => {
    return (
      <View style = {styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Todo:</Text>
        <View style={styles.items}>
          {tasks.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => onCompleteTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      items: {
        marginTop: 30,
      },
      taskWrapper: {
        paddingTop: 60,
        paddingHorizontal: 20,
      },
  })
  
  export default TaskList;
  