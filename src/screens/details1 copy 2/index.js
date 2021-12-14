import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../common/colors";
import {
  GIFTS_HISTORICAL_SCREEN,
  MAIN_SCREEN,
} from "../../constant/screenNames";

const ProductDetail3 = ({ navigation }) => {
  return (
    <View style={styles.container1}>
      <View style={styles.header}>
        <LinearGradient
          colors={[COLORS.splashBG1, "white", "white"]}
          style={styles.content}
        >
          <View style={styles.contentHeader}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(MAIN_SCREEN, {
                  screen: GIFTS_HISTORICAL_SCREEN,
                });
              }}
              style={styles.buttonLeft}
            >
              <MaterialCommunityIcons
                name="chevron-left"
                size={30}
                color={COLORS.tealBlue}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Image
                source={require("../../assets/image/no-image.png")}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.textHeader}>Alvaro Garcia</Text>
            </View>
            <View style={{ width: 30 }}></View>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.rect6Stack}>
            <View style={styles.rect6}>
              <Text style={styles.pasteleriaMaria}>Pasteleria maria</Text>
              <Text style={styles.loremIpsum}>
                Especialidad de chocolate blanco
              </Text>
            </View>
            <View style={styles.rect8}></View>
            <View style={styles.rect9}>
              <Text style={styles.vistaPrevias}>Vista previas</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail3;
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 88,
  },
  textHeader: {
    fontSize: 22,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.tealBlue,
    textAlign: "center",
    marginLeft: 5,
  },
  textBody1: {
    fontSize: 24,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.tealBlue,
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 5,
  },
  textBody2: {
    fontSize: 17,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.gunmetal,
    textAlign: "center",
    marginHorizontal: 15,
    lineHeight: 22,
  },
  content: { height: "100%", paddingTop: 33 },
  body: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: { width: 30, height: 30 },
  imageBody: { width: 150, height: 150 },
  contentHeader: {
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    paddingHorizontal: 15,
  },
  buttonLeft: {
    width: 30,
  },
  cardGifts: {
    height: 500,
    marginHorizontal: 25,
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
  imageHeader: { width: 30, height: 30, position: "absolute", right: 15 },
  imageBody: { width: "90%", marginTop: 10, alignSelf: "center" },
  contentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  rect5: { alignItems: "center", paddingTop: 25 },
  pasteleriaMaria2: {
    fontFamily: "Rounded1cExtraBold",
    color: "#121212",
    height: 20,
    fontSize: 16,
    textAlign: "center",
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
  cardInsideGifts: {
    width: 150,
    height: 200,
    borderRadius: 20,
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
  container: {
    width: 304,
    height: 421,
  },
  rect6: {
    top: 0,
    left: 0,
    width: 304,
    height: 349,
    position: "absolute",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 22,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 60,
    shadowOpacity: 0.35,
    shadowRadius: 20,
  },
  pasteleriaMaria: {
    fontFamily: "Rounded1cExtraBold",
    color: "#121212",
    fontSize: 22,
    marginTop: 41,
    marginLeft: 71,
  },
  loremIpsum: {
    fontFamily: "Rounded1cExtraBold",
    color: "#121212",
    fontSize: 16,
    marginTop: 37,
    marginLeft: 33,
  },
  rect8: {
    top: 158,
    left: 64,
    width: 170,
    height: 238,
    position: "absolute",
    backgroundColor: "rgba(196,172,172,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 24,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 60,
    shadowOpacity: 0.42,
    shadowRadius: 20,
  },
  rect9: {
    top: 371,
    left: 95,
    width: 109,
    height: 50,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 25,
  },
  vistaPrevias: {
    fontFamily: "Rounded1cExtraBold",
    color: "#121212",
    marginTop: 17,
    marginLeft: 14,
  },
  rect6Stack: {
    width: 304,
    height: 421,
  },
});
