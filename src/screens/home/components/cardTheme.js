import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../../common/colors";

const CardTheme = ({ title, icon, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
      <Image
        style={styles.image}
        source={require("../../../assets/image/no-image.png")}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CardTheme;

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    // tintColor: COLORS.tealBlue,
  },
  text: {
    fontSize: 14,
    color: "white",
    fontFamily: "GothamRoundedBook_21018",
    letterSpacing: 0.55,
  },
});
