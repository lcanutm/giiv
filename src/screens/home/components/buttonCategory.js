import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../common/colors";

const ButtonCategory = ({ title, onPress }) => {
  return (
    <View style={styles.content}>
      <View style={styles.contentIcon}>
        <Image
          style={styles.icon}
          source={require("../../../assets/iconos/lupa.png")}
        />
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};
export default ButtonCategory;

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    height: 40,
    borderRadius: 20,
    borderColor: COLORS.borderDots,
    paddingHorizontal: 12,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    alignItems: "center",
  },
  contentIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 18,
    height: "100%",
    resizeMode: "contain",
    tintColor: COLORS.borderDots,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: COLORS.borderDots,
    fontFamily: "GothamRoundedBook_21018",
    letterSpacing: 0.55,
  },
});
