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

function CardCategoria({ name, image, description, precio, onPress, select }) {
  return (
    <TouchableOpacity
      style={{ ...styles.imageButton, ...(select && styles.select) }}
      onPress={onPress}
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
        <View style={!select ? styles.rect7 : styles.rect7select}>
          <Text style={{ ...styles.text, ...(select && styles.text1select) }}>
            {precio}€
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CardCategoria;
const styles = StyleSheet.create({
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

  loremIpsum2: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.turquesa,
    fontSize: 10,
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
    justifyContent: "center",
  },
  rect7select: {
    height: 23,
    width: 50,
    borderRadius: 17.6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.turquesa,
  },
  text: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    fontSize: 13,
  },
  text1select: {
    color: COLORS.turquesa,
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
  select: {
    height: 96,
    borderWidth: 2,
    borderColor: COLORS.turquesa,
  },
});
