import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../img/DP-World.jpg")}
    >
      <View style={styles.title}>
        <Text>Inventory List</Text>
      </View>
      <Image style={styles.logo} source={require("../img/loggoo.png")} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
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
});

export default WelcomeScreen;
