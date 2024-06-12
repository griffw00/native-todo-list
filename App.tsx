import React, {useState} from 'react'
import {  StyleSheet, View} from 'react-native';
import TaskList from "./components/TaskList"
import TaskInput from './components/TaskInput';
import Search from './components/Search'; 


// UI design adapted from Made With Matt :)

const App: React.FC = () => {

  // State for tasks
  const [tasks, setTasks] = useState<string[]>([]);

  // State for search
  const [searchText, setSearchText] = useState(""); 

  const handleSearchTask = (text: string) => {
    setSearchText(text); 
  }

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
      <Search onSearchTask={handleSearchTask}/>
      <TaskList 
        tasks={tasks.filter(task => task.includes(searchText))} 
        onCompleteTask={completeTask} 
      />
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

