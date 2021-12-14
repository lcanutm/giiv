import React from "react";
import { StyleSheet, View, TextInput, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../common/colors";

const InputSearch = ({ onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onChangeText} style={styles.content}>
        <View style={styles.contentInput}>
          <Text style={styles.placeholderText}>{placeholder}</Text>
          {/* <TextInput
            editable={false}
            maxLength={25}
            style={styles.placeholderText}
            keyboardType="default"
            autoCapitalize="none"
            placeholder={placeholder}
            placeholderTextColor={COLORS.borderDots}
            onChangeText={onChangeText}
          /> */}
        </View>
        <View style={styles.contentIcon}>
          <Image
            style={styles.icon}
            source={require("../assets/iconos/lupa.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    zIndex: -99,
    justifyContent: "center",
    height: 44,
    width: "100%",
    alignSelf: "center",
  },
  content: {
    justifyContent: "center",
    height: "100%",
    borderRadius: 12,
    borderColor: COLORS.borderDots,
    paddingHorizontal: 14,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    shadowColor: "rgb(0,0,0)",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  contentInput: {
    justifyContent: "center",
    height: "100%",
    width: "90%",
  },
  placeholderText: {
    fontSize: 14,
    fontFamily: "Rounded1cRegular",
    color: COLORS.gris,
    letterSpacing: 0.2,
  },
  contentIcon: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    tintColor: COLORS.gris,
  },
});
