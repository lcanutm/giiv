import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ButtonAuth = ({ title, onPress }) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress && onPress();
        }}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonAuth;

const styles = StyleSheet.create({
  content: { alignItems: "center" },
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 16,
    fontFamily: "GothamRoundedMedium_21022",
    color: "green",
    textAlign: "center",
  },
});
