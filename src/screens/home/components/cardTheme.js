import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../common/colors";

const CardTheme = ({ title, icono, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <View style={styles.contentIcon}>
        <Image style={styles.image} source={icono} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CardTheme;

const styles = StyleSheet.create({
  container: {
    height: 74,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 12,
    paddingHorizontal: 14,
    // borderWidth: 1,
    // borderColor: COLORS.white,
    shadowColor: "rgb(217,181,203)",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    tintColor: COLORS.white,
  },
  text: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: "Rounded1cMedium",
    letterSpacing: 0,
    textAlign: "center",
  },
  contentIcon: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
