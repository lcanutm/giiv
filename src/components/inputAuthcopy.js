import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../common/colors";

const InputAuth1 = ({ placeholder, onChangeText }) => {
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
export default InputAuth1;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: 44,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 8,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: "rgb(0,0,0)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  input: {
    paddingHorizontal: 12,
    height: "100%",
    fontSize: 14,
    letterSpacing: 0.2,
    color: COLORS.gris,
    fontFamily: "Rounded1cRegular",
  },
});
