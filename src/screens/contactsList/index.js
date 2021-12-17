import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../common/colors";
import InputSearch from "../../components/inputSearch";

const ContactList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          style={styles.content}
          colors={["rgba(65 ,143, 222,0.2)", "white"]}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "flex-end",
              marginTop: 55,
              marginBottom: 14,
            }}
          >
            <View style={{ width: "92%" }}>
              <InputSearch placeholder="¿Buscas algo concreto?" />
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 44,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <MaterialCommunityIcons
                  color={COLORS.white}
                  size={30}
                  name="chevron-down"
                />
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.body}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 60,
                alignItems: "flex-end",
              }}
            >
              <View
                style={{
                  height: 18,
                  width: 18,
                  borderRadius: 9,
                  backgroundColor: COLORS.turquesa,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: "Rounded1cExtraBold",
                  }}
                >
                  +
                </Text>
              </View>
            </View>
            <Text style={styles.textHeader}>
              Regalar a alguien que no está listado
            </Text>
            <View style={{ width: 60 }} />
          </View>
          <View style={styles.scrollArea}>
            <View
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.rect2}>
                <Text style={styles.a2}>A</Text>
              </View>
              <View style={styles.rect3}>
                <Text style={styles.alvaroGarcia}>Alvaro Garcia</Text>
              </View>
              <View style={styles.rect3}>
                <View style={styles.imageRow}>
                  {/* <Image
                      source={require("../../assets/image/no-image.png")}
                      resizeMode="contain"
                      style={styles.image}
                    /> */}
                  <Text style={styles.alvaroGarcia}>Ana Herrero</Text>
                  <Image
                    source={require("../../assets/iconos/tabBarEnlaceIconoCopy.png")}
                    resizeMode="contain"
                    style={{ width: 18, height: 18 }}
                  />
                </View>
              </View>
              <View style={styles.rect2}>
                <Text style={styles.a2}>C</Text>
              </View>
              <View style={styles.rect3}>
                <Text style={styles.alvaroGarcia}>Carlos Rodiguez</Text>
              </View>
              <View style={styles.rect3}>
                <View style={styles.imageRow}>
                  {/* <Image
                      source={require("../../assets/image/no-image.png")}
                      resizeMode="contain"
                      style={styles.image}
                    /> */}
                  <Text style={styles.alvaroGarcia}>Carmen Martinez</Text>
                  <Image
                    source={require("../../assets/iconos/tabBarEnlaceIconoCopy.png")}
                    resizeMode="contain"
                    style={{ width: 18, height: 18 }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    height: 130,
  },
  textHeader: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Rounded1cMedium",
    color: COLORS.turquesa,
    textAlign: "center",
  },
  content: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 12,
  },
  body: {
    paddingTop: 10,
    height: "100%",
    backgroundColor: "white",
    marginTop: -16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: COLORS.tealBlue,
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: -8,
    },
  },
  scrollArea: {
    width: "100%",
    marginTop: 16,
  },
  scrollArea_contentContainerStyle: {
    width: "100%",
  },
  rect2: {
    width: "100%",
    height: 45,
    backgroundColor: "rgba( 65, 143, 222,0.30)",
    justifyContent: "center",
    paddingLeft: 22,
  },
  a2: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    fontSize: 16,
  },
  rect3: {
    width: "100%",
    height: 48,
    borderColor: "rgba(65, 143, 222, 0.15)",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
  },
  alvaroGarcia: {
    fontFamily: "Rounded1cMedium",
    color: COLORS.gris,
    fontSize: 16,
    flex: 1,
  },
  imageRow: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
});
