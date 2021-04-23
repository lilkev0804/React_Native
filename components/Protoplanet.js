import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { picture } from "./image";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Protoplanet = ({ item }) => {
	const image = { uri: item.imgUrl };
	const navigation = useNavigation();
	return (
		<View style={styles.centeredView}>
			<Image source={picture[item.id]} style={styles.image} />
			<Text style={styles.texteBig}>{item.nom}</Text>
			<Text style={styles.texteLatin}> {item.pho} </Text>
			{/* <Text style={styles.temperature}>{item.temperature} | {item.element}</Text> */}

      <TouchableOpacity
        onPress={() => navigation.push("DetailsPlanets", { itemId: item.id })}
      >
        <View style={styles.buttonAcceuil}>
          <Text style={styles.textbuttonAccount}>Explore</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Protoplanet;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    height: windowHeight,
    backgroundColor: "black",
    width: windowWidth,
  },
  image: {
    width: windowWidth,
    height: windowHeight / 2,
    justifyContent: "center",
    top: windowHeight - windowHeight / 3,
    position: "absolute",
  },
  texteBig: {
    alignItems: "center",
    fontSize: 70,
    textAlign: "center",
    color: "white",
    paddingBottom: "5%",
    fontWeight: "100",
  },
  texteLatin: {
    alignItems: "center",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    paddingBottom: "3%",
  },
  temperature: {
    alignItems: "center",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    paddingBottom: "2%",
  },
  buttonAcceuil: {
    marginTop: 5,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  textbuttonAccount: {
    color: "#ffffff",
    fontSize: 15,
  },
});
