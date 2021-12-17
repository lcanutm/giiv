import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../common/colors";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { PRODUCT_DETAIL1_SCREEN } from "../../constant/screenNames";
import CardGift from "../../components/cardGift";

const GiftsHistorical = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
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
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginLeft: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.textHeader}>Mis Regalos</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                // navigation.goBack();
              }}
              style={{
                width: 40,
                height: "100%",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <MaterialCommunityIcons
                  color={COLORS.turquesa}
                  size={30}
                  name="tune-vertical"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <CardGift
          name={"kjhjh"}
          description={"ikjhkj"}
          image={require("../../assets/image/no-image.png")}
          precio={22}
          onPress={() => {
            navigation.navigate(PRODUCT_DETAIL1_SCREEN);
          }}
        />
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
    height: 90,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowColor: "rgb(0,0,0)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: COLORS.white,
    zIndex: 99,
  },
  textHeader: {
    fontSize: 22,
    fontFamily: "Rounded1cMedium",
    color: COLORS.azul,
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
  body: { paddingTop: 22, paddingHorizontal: 22 },
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
