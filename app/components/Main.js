import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import Note from "./Note";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: "",
    };
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
          editMethod={() => this.editMethod(key)}
        />
      );
    });

    return (
      <ImageBackground
        style={styles.background}
        source={require("../img/DP-World.jpg")}
      >
        <Image style={styles.logo} source={require("../img/loggoo.png")} />
        <Text style={styles.headerText}>Inventory List</Text>

        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.header}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="New Product"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={this.addNote.bind(this)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
  addNote() {
    //Funtion to add new entry to the inventory list
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: "" });
    }
  }
  deleteNote(key) {
    //Function to delete an entry from the inventory list
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
  editMethod(key) {
    //Function to edit an entry from the inventory list
    var de = new Date();
    this.state.noteArray.push({
      date: de.getFullYear() + "/" + (de.getMonth() + 1) + "/" + de.getDate(),
      note: this.state.noteText,
    });
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 2,
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 199,
    position: "absolute",
    top: 0.1,
  },
  title: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  headerText: {
    color: "white",
    fontSize: 29,
    padding: 94,
    top: 40,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
    top: 70,
  },
  header: {
    position: "absolute",
    width: 280,
    height: 100,
    left: 15,
    top: 200,
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 30,
    backgroundColor: "black",
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 10,
    top: 205,
    backgroundColor: "black",
    width: 65,
    height: 65,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  addButtonText: {
    color: "white",
    fontSize: 24,
  },
});
