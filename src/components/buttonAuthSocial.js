import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../common/colors";

const ButtonAuthSocial = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress && onPress();
        }}
      >
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={require("../../src/assets/image/no-image.png")}
          />
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonAuthSocial;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  button: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 22,
    paddingHorizontal: 50,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: "Rounded1cMedium",
    color: "rgb(100,102,102)",
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 17,
  },
});
