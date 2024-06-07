import React, {useState} from 'react'
import {  StyleSheet, View} from 'react-native';
import TaskList from "./components/TaskList"
import TaskInput from './components/TaskInput';


// UI design adapted from Made With Matt :)

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index: number) => {
    const itemsCopy = [...tasks];
    itemsCopy.splice(index, 1);
    setTasks(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <TaskList tasks={tasks} onCompleteTask={completeTask} />
      <TaskInput onAddTask={handleAddTask} />
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 2000,
    paddingHorizontal: 80,
  },
});

export default App;

