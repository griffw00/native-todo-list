import React from 'react'
import {useState} from 'react'
import { Text, View, ScrollView, StyleSheet} from 'react-native'; 
import Task from './Task';


// PLAN If this task is being editted, pass True to Task
// The Task will then display a textinput
// The task should then pass something back to this component


type TaskListProps = {
    tasks: string[];
    onCompleteTask: (index: number) => void;
    onEditTask: (task: string, index: number) => void; 
}

// Specify that TaskList is a Functional Component
const TaskList: React.FC<TaskListProps> = ({ tasks, onCompleteTask, onEditTask }) => {

    return (
      <View style = {styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Todo:</Text>
        <ScrollView>
          <View style={styles.items}>
            {tasks.map((item, index) => (
                <Task 
                  text={item} 
                  onEditTask={onEditTask} 
                  onCompleteTask={onCompleteTask} 
                  index = {index}
                  key = {index}
                  />
            ))}
          </View>
        </ScrollView>
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
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
      },
  })

  
  export default TaskList;
  