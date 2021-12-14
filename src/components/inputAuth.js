import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../common/colors";

const InputAuth = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.content}>
      <TextInput
        onChangeText={(text) => {
          onChangeText && onChangeText(text);
        }}
        placeholder={placeholder}
        placeholderTextColor={COLORS.placeholder}
        style={styles.input}
      />
    </View>
  );
};
export default InputAuth;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: 44,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 12,
    marginBottom: 8,
  },
  input: {
    paddingHorizontal: 6,
    height: "100%",
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 0,
    color: COLORS.placeholder,
    fontFamily: "Rounded1cMedium",
  },
});
