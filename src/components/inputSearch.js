import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import { COLORS } from "../common/colors";

const InputSearch = ({ onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentInput}>
          <TextInput
            maxLength={25}
            style={styles.placeholderText}
            keyboardType="default"
            autoCapitalize="none"
            placeholder={placeholder}
            placeholderTextColor={COLORS.borderDots}
            onChangeText={onChangeText}
          />
        </View>
        <View style={styles.contentIcon}>
          <Image
            style={styles.icon}
            source={require("../assets/iconos/lupa.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 40,
    width: "90%",
    alignSelf: "center",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  content: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
    borderRadius: 12,
    borderColor: COLORS.borderDots,
    paddingHorizontal: 12,
    flexDirection: "row",
    backgroundColor: "white",
  },
  contentInput: {
    justifyContent: "center",
    height: "100%",
    width: "90%",
  },
  placeholderText: {
    width: "90%",
    fontSize: 14,
    fontFamily: "GothamRoundedBook_21018",
    color: COLORS.borderDots,
    letterSpacing: 0.35,
  },
  contentIcon: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  icon: {
    width: 18,
    height: "100%",
    resizeMode: "contain",
    tintColor: COLORS.borderDots,
  },
});
