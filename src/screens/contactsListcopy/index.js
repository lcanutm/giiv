import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Modal, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../common/colors";
import InputSearch from "../../components/inputSearch";

const ContactListModal = ({ navigation, visible }) => {
  return (
    <Modal visible transparent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.content}>
            <InputSearch placeholder="¿A quién quieres regalar?" />
            <TouchableOpacity onPress={visible}>
              <MaterialCommunityIcons
                name="chevron-down"
                size={30}
              ></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.textHeader}>
              + Regalar a alguien que no esta listado
            </Text>
            <View style={styles.scrollArea}>
              <View
                horizontal={false}
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <View style={styles.rect2}>
                  <Text style={styles.a2}>A</Text>
                </View>
                <View style={styles.rect3}>
                  <View style={styles.alvaroGarciaRow}>
                    <Text style={styles.alvaroGarcia}>Alvaro Garcia</Text>
                    <Text style={styles.invitar}>Invitar</Text>
                  </View>
                </View>
                <View style={styles.rect4}>
                  <View style={styles.imageRow}>
                    <Image
                      source={require("../../assets/image/no-image.png")}
                      resizeMode="contain"
                      style={styles.image}
                    />
                    <Text style={styles.alvaroGarcia1}>Alvaro Garcia</Text>
                    <Text style={styles.teBonifico}>Te bonifico</Text>
                  </View>
                </View>
                <View style={styles.rect5}>
                  <View style={styles.alvaroGarcia2Row}>
                    <Text style={styles.alvaroGarcia2}>Alvaro Garcia</Text>
                    <Text style={styles.invitar2}>Invitar</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ContactListModal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  header: {
    height: 150,
  },
  textHeader: {
    fontSize: 14,
    fontFamily: "GothamRoundedBook_21018",
    color: COLORS.tealBlue,
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 5,
  },
  content: {
    height: "100%",
    paddingTop: 33,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
  },
  body: {
    paddingTop: 10,
    height: "100%",
    backgroundColor: "white",
    marginTop: -30,
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
    backgroundColor: "#E6E6E6",
    marginTop: 65,
  },
  scrollArea_contentContainerStyle: {
    height: 701,
    width: "100%",
  },
  rect2: {
    width: "100%",
    height: 45,
    backgroundColor: "rgba(74,144,226,1)",
  },
  a2: {
    fontFamily: "GothamRoundedBook_21018",
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 25,
  },
  rect3: {
    width: "100%",
    height: 45,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    borderBottomWidth: 1,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row",
  },
  alvaroGarcia: {
    fontFamily: "GothamRoundedBook_21018",
    color: "rgba(133,133,133,1)",
  },
  invitar: {
    fontFamily: "GothamRoundedBook_21018",
    color: "rgba(92,144,32,1)",
    fontSize: 12,
    textDecorationLine: "underline",
    marginLeft: 217,
    marginTop: 2,
  },
  alvaroGarciaRow: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 25,
    marginTop: 15,
  },
  rect4: {
    width: "100%",
    height: 45,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  image: {
    width: 27,
    height: 27,
  },
  alvaroGarcia1: {
    fontFamily: "GothamRoundedBook_21018",
    color: "rgba(133,133,133,1)",
    marginLeft: 4,
    marginTop: 6,
  },
  teBonifico: {
    fontFamily: "GothamRoundedBook_21018",
    color: "rgba(74,144,226,1)",
    fontSize: 12,
    marginLeft: 162,
    marginTop: 8,
  },
  imageRow: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 21,
    marginTop: 9,
  },
  rect5: {
    width: "100%",
    height: 45,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  alvaroGarcia2: {
    fontFamily: "GothamRoundedBook_21018",
    color: "rgba(133,133,133,1)",
  },
  invitar2: {
    fontFamily: "GothamRoundedBook_21018",
    color: "rgba(92,144,32,1)",
    fontSize: 12,
    textDecorationLine: "underline",
    marginLeft: 217,
    marginTop: 2,
  },
  alvaroGarcia2Row: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 25,
    marginTop: 15,
  },
});
