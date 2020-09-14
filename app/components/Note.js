import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}
        >
          <Image
            style={styles.noteDeleteImg}
            source={require("../img/trash.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.props.editMethod}
          style={styles.noteEdit}
        >
          <Image
            style={styles.noteEditImg}
            source={require("../img/edit.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    width: 350,
    backgroundColor: "black",
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  noteText: {
    color: "white",
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    top: 20,
    bottom: 20,
    right: 20,
  },
  noteDeleteImg: {
    width: 20,
    height: 20,
  },
  noteEdit: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    top: 20,
    bottom: 20,
    right: 65,
  },
  noteEditImg: {
    width: 20,
    height: 20,
  },
});
