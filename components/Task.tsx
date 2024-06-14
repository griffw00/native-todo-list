import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'; 


// Define a type for taskProps
type taskProps = {
    text: string;
    onCompleteTask: (index: number) => void;
    onEditTask: (task: string, index: number) => void; 
    index: number;
  };


const Task = (props: taskProps) => {

    // State variable for whether a state is being edited
    const [isEdit, setIsEdit] = useState(false); 
    const [editingTaskText, setEditingTaskText] = useState(props.text); // Initialize with current text  

    const handleEditTask = () => {
        setIsEdit(true); 
    }

    // Set the state variable back to false
    const handleCompleteEditTask = () => {
        props.onEditTask(editingTaskText, props.index) // Update tasks one last time
        setIsEdit(false); 
    }

    
    const handleTextChange = (text: string) => {
        setEditingTaskText(text)
        props.onEditTask(editingTaskText, props.index); 
    }

    return (
        <TouchableOpacity onPress = {handleEditTask}>
            <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <View style= {styles.square}></View>
                {/* Load component conditionally */}
                {isEdit ? (
                    <TextInput
                    style={styles.textInput}
                    value={editingTaskText}
                    onChangeText={handleTextChange}
                    onBlur={handleCompleteEditTask}
                    />
                ) : (
            <Text style={styles.text}>{props.text}</Text>
                )}
            </View>
                <TouchableOpacity key={props.index} onPress={() => props.onCompleteTask(props.index)}>
                    <View style = {styles.circular}></View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    ); 
}

// Editing a task:
// Clicking on task should bring up a keyboard view and convert that component to <TextInput>
// Afterwards, the task should pass an ID to editTask?
const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF", 
        padding: 10,
        borderRadius: 10,
        marginBottom: 20, 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",   
    }, 
    itemLeft: { 
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4, 
        borderRadius: 5,
        marginRight: 15, 
    },
    text: {
        maxWidth: '80%', 
    },
    circular: {
        width: 15,
        height: 15,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        maxWidth: "80%",
    }


})

export default Task;