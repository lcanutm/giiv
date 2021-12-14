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
    height: 34,
    borderRadius: 17,
    paddingHorizontal: 12,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    alignItems: "center",
  },
  contentIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 14,
    height: "100%",
    resizeMode: "contain",
    tintColor: COLORS.gris,
    marginRight: 7,
  },
  text: {
    flex: 1,
    fontSize: 12,
    color: COLORS.gris,
    fontFamily: "Rounded1cMedium",
    letterSpacing: 0,
  },
});
