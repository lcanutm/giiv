import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../common/colors";
import { Entypo } from "@expo/vector-icons";
import { PRODUCT_DETAIL1_SCREEN } from "../../constant/screenNames";

const GiftsHistorical = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.textHeader}>Mis Regalos</Text>
            <Image
              source={require("../../assets/image/no-image.png")}
              resizeMode="contain"
              style={styles.imageHeader}
            />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(PRODUCT_DETAIL1_SCREEN);
          }}
          style={styles.cardGifts}
        >
          <Image
            source={require("../../assets/image/no-image.png")}
            resizeMode="contain"
            style={styles.imageBody}
            imageStyle={styles.image_imageStyle}
          ></Image>
          <View style={styles.rect5}>
            <Text style={styles.pasteleriaMaria2}>Pasteleria Maria</Text>
            <Text style={styles.loremIpsum}>
              Deliciosas tartas de chocolate blaco, hechas a{"\n"}mano...
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <View style={styles.loremIpsum2Row}>
                  <Text style={styles.loremIpsum2}>Ver catalogo completo</Text>
                  <Entypo
                    name="chevron-thin-right"
                    style={styles.icon2}
                  ></Entypo>
                </View>
              </TouchableOpacity>
              <View style={styles.rect7}>
                <Text style={styles.text}>22€</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
    height: 88,
  },
  textHeader: {
    fontSize: 22,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.tealBlue,
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 5,
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
  body: {},
  imageHeader: { width: 30, height: 30, position: "absolute", right: 15 },
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
});
