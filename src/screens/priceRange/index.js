import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Modal, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../common/colors";
import InputSearch from "../../components/inputSearch";

const PriceRange = ({ navigation, visible }) => {
  return (
    <Modal visible transparent animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-end",
              marginTop: 55,
              flexDirection: "row",
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
                onPress={() => visible(false)}
                style={{
                  width: 40,
                  height: "100%",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <MaterialCommunityIcons
                    color={COLORS.white}
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
              <Text style={styles.textHeader}>Tu pones el precio</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>Indica el rango que te interesa:</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  fontFamily: "Rounded1cMedium",
                  fontSize: 14,
                  color: COLORS.gris,
                }}
              >
                Desde
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  fontFamily: "Rounded1cMedium",
                  fontSize: 14,
                  color: COLORS.gris,
                }}
              >
                Hasta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentGift}>
          <TouchableOpacity style={styles.gift}>
            <Text style={styles.textButton}>Aplicar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PriceRange;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  header: {
    height: 130,
  },
  textHeader: {
    flex: 1,
    fontSize: 22,
    fontFamily: "Rounded1cMedium",
    color: COLORS.white,
    textAlign: "center",
    marginRight: 40,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 130,
  },
  text: {
    fontSize: 14,
    fontFamily: "Rounded1cMedium",
    color: COLORS.white,
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
    borderColor: COLORS.white,
    borderWidth: 1,
  },
  textButton: {
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    textAlign: "center",
  },
  button: {
    width: 101,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    margin: 6,
  },
});
