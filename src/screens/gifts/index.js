import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../common/colors";
import {
  GIFTS_HISTORICAL_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
} from "../../constant/screenNames";

const Gifts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.textHeader}>Mis Regalos</Text>
            <Image
              source={require("../../assets/image/no-image.png")}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(GIFTS_HISTORICAL_SCREEN);
          }}
        >
          <Image
            source={require("../../assets/image/no-image.png")}
            resizeMode="contain"
            style={styles.imageBody}
          />
        </TouchableOpacity>
        <Text style={styles.textBody1}>Ups! No haz iniciado sesion</Text>
        <View style={styles.description}>
          <Text style={styles.textBody2}>
            Para acceder a tus regalos recuerda que debes
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Start", {
                  screen: LOGIN_SCREEN,
                });
              }}
            >
              <Text style={styles.iniciar}>{" iniciar sesion"}</Text>
            </TouchableOpacity>
            {" o "}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Start", {
                  screen: REGISTER_SCREEN,
                });
              }}
            >
              <Text style={styles.iniciar}>crear una cuenta</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Gifts;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 156,
  },
  textHeader: {
    fontSize: 22,
    fontFamily: "Rounded1cMedium",
    color: COLORS.azul,
    textAlign: "center",
  },
  textBody1: {
    fontSize: 22,
    fontFamily: "Rounded1cMedium",
    color: COLORS.azul,
    textAlign: "center",
  },
  textBody2: {
    fontSize: 16,
    fontFamily: "Rounded1cMedium",
    color: COLORS.gris,
    textAlign: "center",
    marginHorizontal: 22,
    lineHeight: 22,
  },
  iniciar: {
    fontSize: 16,
    fontFamily: "Rounded1cMedium",
    color: COLORS.turquesa,
    textDecorationLine: "underline",
    paddingTop: 8,
  },
  description: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  content: { height: "100%", paddingTop: 44 },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 156,
  },
  image: { width: 30, height: 30, position: "absolute", right: 15 },
  imageBody: { width: 150, height: 150 },
  contentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
  },
});
