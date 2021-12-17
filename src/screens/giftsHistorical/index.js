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
  body: { paddingTop: 22, paddingHorizontal: 22 },
});
