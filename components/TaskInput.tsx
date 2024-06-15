import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

type TaskInputProps = {
  onAddTask: (task: string) => void;
}
// type TaskInputProps = (task: string) => void;

const TaskInput: React.FC<TaskInputProps> = ({onAddTask}) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim().length > 0) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}
    >
      <TextInput
        value={task}
        style={styles.input}
        placeholder="Write a Todo"
        onChangeText={setTask}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    input: {
        padding: 15,
        width: 250,
        paddingHorizontal: 15,
        backgroundColor: "white",
        borderRadius: 60,
        borderColor: "#C0C0C0",
        borderWidth: 1,
    
      },
      writeTaskWrapper: {
        position: "relative",
        bottom: 25,
        paddingTop: 25,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    
      },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "white",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
      },
      addText: {},
})

export default TaskInput;
