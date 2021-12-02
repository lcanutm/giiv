import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const InputAuth = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.content}>
      <TextInput
        onChangeText={(text) => {
          onChangeText && onChangeText(text);
        }}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};
export default InputAuth;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: 40,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 6,
    height: "100%",
    textAlign: "center",
  },
});
