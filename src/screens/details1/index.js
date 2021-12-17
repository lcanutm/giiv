import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../common/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  GIFTS_HISTORICAL_SCREEN,
  MAIN_SCREEN,
} from "../../constant/screenNames";

const GiftsHistorical1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={["rgba(65,143,222,0.2)", COLORS.white]}
          style={{
            flex: 1,
            paddingTop: 45,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: 44,
              width: "100%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(MAIN_SCREEN, {
                  screen: GIFTS_HISTORICAL_SCREEN,
                });
              }}
              style={{
                width: 30,
                height: "100%",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <MaterialCommunityIcons
                  color={COLORS.azul}
                  size={30}
                  name="chevron-left"
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginRight: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/image/no-image.png")}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.textHeader}>Álvaro García</Text>
            </View>
          </View>
          <View style={styles.containerHeaderMsg}>
            <View style={styles.contentHeaderMsg}>
              <Text style={styles.textHeaderMsg}>Gracias mi amor, tq!</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.body}>
        <View style={styles.containerCard}>
          <View style={styles.contentCard}>
            <Text style={styles.textCard}>Pastelería Tartevere</Text>
            <Text style={styles.textCard1}>Tarta Red velvet</Text>
            <Text style={styles.textCard2}>Tarta (16cm)</Text>
            <View style={styles.containerCardMsg}>
              <View style={styles.contentCardMsg}>
                <View style={styles.viewCardMsg}>
                  <Text style={styles.textVCMsg}>Vista previa</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GiftsHistorical1;
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
  textHeaderMsg: {
    fontSize: 18,
    fontFamily: "Rounded1cMedium",
    color: COLORS.white,
    textAlign: "center",
  },
  body: { flex: 1, paddingHorizontal: 24 },
  image: { width: 30, height: 30, marginRight: 6, borderRadius: 15 },
  containerHeaderMsg: {
    height: 47,
    paddingHorizontal: 40,
  },
  contentHeaderMsg: {
    height: 47,
    width: "100%",
    borderRadius: 12,
    backgroundColor: COLORS.azul,
    justifyContent: "center",
  },
  containerCard: {
    height: 313,
  },
  contentCard: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    paddingTop: 22,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    alignItems: "center",
  },
  containerCardMsg: {
    height: 232,
    width: "100%",
    paddingHorizontal: 77,
    zIndex: 1,
    position: "absolute",
    bottom: -36,
  },
  contentCardMsg: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: "rgb(217,181,203)",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    alignItems: "center",
  },
  textCard: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.grisoscuro,
    fontSize: 22,
  },
  textCard1: {
    fontFamily: "Rounded1cMedium",
    color: COLORS.gris,
    fontSize: 18,
  },
  textCard2: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.azul,
    fontSize: 22,
  },
  textVCMsg: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.azul,
    fontSize: 12,
    textAlign: "center",
  },
  viewCardMsg: {
    height: 34,
    width: 96,
    justifyContent: "center",
    position: "absolute",
    bottom: -17,
    backgroundColor: COLORS.white,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: COLORS.azul,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});
