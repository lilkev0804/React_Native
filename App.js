import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ImageBackground,TouchableOpacity, Text, View, Button } from "react-native";
const image = {
  uri:
    "https://images.unsplash.com/photo-1540198163009-7afda7da2945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
};
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.texte} >Discover the universe</Text>
        <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Start</Text>
      </TouchableOpacity>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  texte:{
    alignItems: 'center',
    fontSize: 50,
    textAlign: "center"
  },  
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#010213",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText:{
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    margin: 0
  }
});
