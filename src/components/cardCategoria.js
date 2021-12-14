import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { COLORS } from "../common/colors";

function CardCategoria({ name, image, description, precio, onPress }) {
  const [select, setSelect] = useState(false);
  return (
    <TouchableOpacity
      style={{ ...styles.imageButton, ...(select && styles.select) }}
      onPress={() => {
        setSelect(!select);
        onPress && onPress(!select);
      }}
    >
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      ></ImageBackground>
      <View style={styles.rect5}>
        <Text style={styles.name}>{name}</Text>
        <Text numberOfLines={2} style={styles.loremIpsum}>
          {description}
        </Text>
        <View style={styles.loremIpsum2Row}>
          <Text style={styles.loremIpsum2}>Ver opciones</Text>
          <Entypo
            name="chevron-right"
            size={18}
            resizeMode="contain"
            color={COLORS.turquesa}
          ></Entypo>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.rect7}>
          <Text style={styles.text1}>desde</Text>
          <Text style={styles.text}>{precio}€</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CardCategoria;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 268,
  },
  textHeader: {
    fontSize: 16,
    fontFamily: "Rounded1cRegular",
    color: COLORS.azul,
    textAlign: "center",
    height: 28,
    marginTop: 16,
    marginBottom: 4,
  },
  content: { height: "100%", paddingTop: 55 },
  body: {
    paddingTop: 10,
    backgroundColor: "white",
    marginTop: -16,
    borderTopLeftRadius: 28.5,
    borderTopRightRadius: 28.5,
    shadowColor: COLORS.tealBlue,
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: -8,
    },
  },
  ellipse: {
    top: 0,
    left: 89,
    width: 202,
    height: 203,
    position: "absolute",
  },
  rect5: {
    flex: 1,
    paddingLeft: 12,
    paddingTop: 12,
  },
  name: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.grisoscuro,
    fontSize: 14,
  },
  loremIpsum: {
    fontFamily: "Rounded1cMedium",
    color: COLORS.gris,
    fontSize: 12,
  },
  button: {
    flex: 1,
    height: 22,
    flexDirection: "row",
  },
  loremIpsum2: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.turquesa,
    fontSize: 10,
  },
  icon2: {
    color: COLORS.turquesa,
    marginLeft: 10,
  },
  loremIpsum2Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  rect7: {
    height: 24,
    width: 51,
    borderRadius: 17.6,
    backgroundColor: COLORS.turquesa,
    alignItems: "center",
  },
  text: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    fontSize: 13,
    marginTop: -4,
  },
  text1: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    fontSize: 8,
    textAlign: "center",
  },
  buttonRow: {
    height: "100%",
    width: 80,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 4,
    paddingRight: 12,
  },
  image: {
    width: 116,
    height: "100%",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  imageButton: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    height: 94,
    borderRadius: 12,
    elevation: 5,
    shadowColor: COLORS.azul,
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginBottom: 16,
    padding: 1,
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
  contentInput: {
    marginHorizontal: 12,
  },
  etiquetas: {
    marginLeft: 12,
    alignItems: "center",
    height: 100,
    marginBottom: -8,
  },
  select: {
    borderWidth: 2,
    borderColor: COLORS.turquesa,
  },
});
