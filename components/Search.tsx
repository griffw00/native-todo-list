import { useState } from 'react';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
 


type SearchProps = {
    onSearchTask: (text: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchTask}) => {

    const [text, setText] = useState(""); 

    const handleSearchTask = (inputText: string) => {
        setText(inputText)
        onSearchTask(inputText); 
    }

    return (
        <KeyboardAvoidingView>
            <View style = {styles.searchContainer}>
                <Icon style = {styles.searchIcon} name = "search" color = "#888888"/>
                <TextInput 
                    style = {styles.text}
                    value={text}
                    placeholder="Filter ToDo..."
                    onChangeText={handleSearchTask}
                />  
             </View> 
         </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: "#b0e0fb",
        marginTop: 70,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 60,
        height: 35,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        
    },
    text: {
        alignItems: "center", 
        maxWidth: "100%",
        flex: 1,
        marginLeft: 10, 
    },
    searchIcon: {

    },

})

export default Search;
