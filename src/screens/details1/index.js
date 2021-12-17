import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../common/colors";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  GIFTS_HISTORICAL_SCREEN,
  MAIN_SCREEN,
  PRODUCT_DETAIL1_SCREEN,
} from "../../constant/screenNames";
import CardGift from "../../components/cardGift";

const GiftsHistorical = ({ navigation }) => {
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

export default GiftsHistorical;
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
  content: {
    height: "100%",
    paddingTop: 33,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  cardGifts: {
    height: 500,
    marginHorizontal: 25,
    marginTop: 25,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  body: { flex: 1, paddingHorizontal: 24 },
  image: { width: 30, height: 30, marginRight: 6, borderRadius: 15 },
  imageBody: { width: "90%", marginTop: 10, alignSelf: "center" },
  contentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  rect5: { position: "absolute" },
  pasteleriaMaria2: {
    fontFamily: "Rounded1cExtraBold",
    color: "#121212",
    height: 20,
    width: 135,
    fontSize: 16,
    marginTop: 312,
    marginLeft: 30,
  },
  loremIpsum: {
    fontFamily: "Rounded1cExtraBold",
    color: "#121212",
    fontSize: 14,
    marginTop: 14,
    marginLeft: 30,
  },
  button: {
    width: 171,
    height: 22,
    flexDirection: "row",
  },
  loremIpsum2: {
    fontFamily: "Rounded1cExtraBold",
    color: "rgba(29,158,112,1)",
    marginTop: 3,
  },
  icon2: {
    color: "rgba(29,158,112,1)",
    fontSize: 19,
    marginLeft: 10,
  },
  loremIpsum2Row: {
    height: 22,
    flexDirection: "row",
    flex: 1,
  },
  rect7: {
    width: 47,
    height: 22,
    borderRadius: 13,
    backgroundColor: "rgba(29,158,112,1)",
    marginLeft: 99,
  },
  text: {
    fontFamily: "Rounded1cExtraBold",
    color: "rgba(255,255,255,1)",
    marginTop: 2,
    marginLeft: 10,
  },
  buttonRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 30,
    marginRight: 28,
  },
  image_imageStyle: {},
  button2: {
    width: 111,
    height: 33,
    marginTop: 17,
    marginLeft: 238,
  },
  group: {
    width: 111,
    height: 33,
  },
  rect6: {
    width: 111,
    height: 33,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,1)",
  },
  patrocinado: {
    fontFamily: "Rounded1cExtraBold",
    color: "rgba(43,135,204,1)",
    height: 17,
    width: 111,
    textAlign: "center",
    marginTop: 8,
  },
  ellipseStack: {
    flex: 1,
  },
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
