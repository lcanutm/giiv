import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../common/colors";

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
    height: 44,
    paddingHorizontal: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 22,
  },
  text: {
    fontSize: 16,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.turquesa,
    textAlign: "center",
    letterSpacing: 1,
  },
});
