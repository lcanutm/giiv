import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { COLORS } from "../../common/colors";
import { dimensions } from "../../common/styles";
import {
  GIFTS_HISTORICAL_SCREEN,
  MAIN_SCREEN,
} from "../../constant/screenNames";
import CardTheme from "../home/components/cardTheme";
import Message from "../message";

const thematic = [
  {
    color: "rgb(217,181,203)",
    title: "Enhorabuena",
    icono: require("../../assets/iconos/etiquetaIconosEnhorabuena.png"),
  },
  {
    color: "rgb(254,208,213)",
    title: "Cumpleaños",
    icono: require("../../assets/iconos/etiquetaIconosCumple.png"),
  },
  {
    color: "rgb(186,237,239)",
    title: "Gracias",
    icono: require("../../assets/iconos/etiquetaIconosGracias.png"),
  },
  {
    color: "rgb(217,181,203)",
    title: "Graduación",
    icono: require("../../assets/iconos/etiquetaIconosGraduacion.png"),
  },
];
const Checkout = ({ navigation }) => {
  const [message, setmessage] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={["rgba(65,143,222,0.2)", COLORS.white]}
          style={{
            flex: 1,
            paddingTop: 55,
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
                navigation.goBack();
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
                  color={COLORS.azul}
                  size={30}
                  name="chevron-left"
                />
              </View>
            </TouchableOpacity>

            {/* <Image
                  source={require("../../assets/image/no-image.png")}
                  resizeMode="contain"
                  style={styles.image}
                /> */}
            <Text style={styles.textHeader}>Álvaro García</Text>
          </View>
        </LinearGradient>
      </View>
      <View>
        <Text style={styles.text1}>Selecciona el motivo:</Text>
        <FlatList
          style={{ marginLeft: dimensions.width * 0.05 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={thematic}
          keyExtractor={(item) => {
            return item.title;
          }}
          renderItem={({ item }) => {
            return (
              <CardTheme
                title={item.title}
                color={item.color}
                icono={item.icono}
              />
            );
          }}
        />
      </View>
      <View style={styles.contentGift}>
        <TouchableOpacity
          style={styles.gift}
          onPress={() => {
            setmessage(true);
          }}
        >
          <Text style={styles.textButton}>Continuar</Text>
        </TouchableOpacity>
      </View>
      {message && <Message visible={setmessage} navigation={navigation} />}
    </View>
  );
};

export default Checkout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 156,
  },
  textHeader: {
    flex: 1,
    fontSize: 22,
    fontFamily: "Rounded1cMedium",
    color: COLORS.azul,
    textAlign: "center",
    marginRight: 40,
  },
  text1: {
    fontSize: 18,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.turquesa,
    textAlign: "center",
    marginBottom: 12,
  },
  contentGift: {
    width: "100%",
    height: 44,
    position: "absolute",
    bottom: 34,
    paddingHorizontal: 24,
  },
  gift: {
    backgroundColor: COLORS.turquesa,
    width: "100%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
  textButton: {
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    textAlign: "center",
  },
});
