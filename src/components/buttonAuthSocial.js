import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "GothamRoundedBook_21018",
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 20,
    // tintColor: COLORS.tealBlue,
  },
});
