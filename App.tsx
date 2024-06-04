import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import Task from "./components/tasks";


// UI adapted from Made With Matt :)

export default function App() {
  return (


    <View style={styles.container}>
    

      {/* Today's Tasks */}
        <View style = {styles.taskWrapper}>
          <Text style = {styles.sectionTitle}> Todo: </Text>

          <View style = {styles.items}>
            <Task text = {'Task 1'}/>
            <Task text = {'Task 2'}/>
          </View>

        </View>

        {/* Write a task */}
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >

          <TextInput style = {styles.input} placeholder = {'Write a Todo'}/>
          <TouchableOpacity>
            <View style = {styles.addWrapper}>
              <Text style = {styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>

    

  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
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
    position: "absolute",
    bottom: 60, // Bottom of the screen
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


});
