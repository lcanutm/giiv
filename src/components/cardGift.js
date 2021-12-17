import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../common/colors";

function CardGift({ name, image, description, precio, onPress }) {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.rect5}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <View style={styles.loremIpsum2Row}>
            <Text style={styles.title}>Pastelería Tartevere</Text>
            <Text style={styles.loremIpsum}>Tarta Red velvet</Text>
            <Text style={{ ...styles.loremIpsum, ...styles.loremIpsum1 }}>
              Tarta (16cm)
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 12,
            }}
          >
            <Entypo
              name="chevron-thin-right"
              size={30}
              resizeMode="contain"
              color={COLORS.turquesa}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.separador} />
        <View style={styles.item}>
          <View style={styles.contentThumbnail}>
            <Image source={image} resizeMode="cover" style={styles.thumbnail} />
          </View>
          <Text style={styles.textItem}>Álvaro García</Text>
        </View>
        <View style={styles.separador1} />
        <View style={styles.item}>
          <View style={styles.contentThumbnail}>
            <Image
              source={require("../assets/iconos/trackin1Copy4.png")}
              resizeMode="contain"
              style={styles.thumbnail1}
            />
          </View>
          <Text style={styles.textItem1}>Se ha completado el pedido</Text>
        </View>
      </View>
    </View>
  );
}

export default CardGift;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: COLORS.white,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  rect5: {
    width: "100%",
  },
  title: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.grisoscuro,
    fontSize: 14,
  },
  loremIpsum: {
    fontFamily: "Rounded1cRegular",
    color: COLORS.gris,
    fontSize: 14,
  },
  loremIpsum1: {
    color: COLORS.azul,
  },
  button: {
    height: 70,
    flexDirection: "row",
  },
  loremIpsum2: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.turquesa,
    fontSize: 14,
  },
  loremIpsum2Row: { flex: 1, paddingLeft: 16 },
  rect7: {
    paddingHorizontal: 16,
    height: 34,
    borderRadius: 22,
    backgroundColor: COLORS.turquesa,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    fontSize: 17,
  },
  buttonRow: {
    flexDirection: "row",
    height: 70,
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: 221,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  item: {
    flexDirection: "row",
    paddingLeft: 16,
    height: 40,
    alignItems: "center",
  },
  contentThumbnail: {
    height: 24,
    width: 24,
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  separador: {
    height: 1,
    backgroundColor: "rgb(235,235,235)",
    marginTop: 7,
  },

  thumbnail: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
  textItem: {
    fontFamily: "Rounded1cRegular",
    color: COLORS.azul,
    fontSize: 16,
  },
  separador1: {
    height: 1,
    backgroundColor: "rgb(235,235,235)",
    marginTop: 7,
  },

  thumbnail1: {
    height: 19,
    width: 19,
    tintColor: COLORS.gris,
  },
  textItem1: {
    fontFamily: "Rounded1cRegular",
    color: COLORS.gris,
    fontSize: 16,
  },
});
