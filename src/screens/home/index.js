import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { COLORS } from "../../common/colors";
import { dimensions } from "../../common/styles";
import InputSearch from "../../components/inputSearch";
import ButtonCategory from "./components/buttonCategory";
import CardTheme from "./components/cardTheme";
// import Svg, { Ellipse } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";
const thematic = [
  { color: "#c59ab6", title: "EnhoraBuena" },
  { color: "#c98d6a", title: "Cumpleaños" },
  { color: "#72cfad", title: "Gracias" },
  { color: "#c59ab6", title: "Graduación" },
];
const categorySearch = [
  { title: "Nuevo" },
  { title: "Comida" },
  { title: "Casa" },
  { title: "Infantil" },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={[COLORS.splashBG1, "white", "white"]}
          style={styles.content}
        >
          <InputSearch placeholder="¿A quién quieres regalar?" />
          <Text style={styles.textHeader}>
            Elige una temática para tu regalo:
          </Text>
          <FlatList
            style={{ marginLeft: dimensions.width * 0.05 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={thematic}
            keyExtractor={(item) => {
              return item.title;
            }}
            renderItem={({ item }) => {
              return <CardTheme title={item.title} color={item.color} />;
            }}
          />
        </LinearGradient>
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.textHeader}>¿Qué te gustaría regalar?</Text>
          <FlatList
            contentContainerStyle={{
              marginLeft: dimensions.width * 0.05,
              alignItems: "center",
              marginBottom: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categorySearch}
            keyExtractor={(item) => {
              return item.title;
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ width: 10 }}></View>;
            }}
            renderItem={({ item }) => {
              return <ButtonCategory title={item.title} />;
            }}
          />
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: dimensions.width * 0.05,
              height: 55,
            }}
          >
            <InputSearch placeholder="¿Buscas algo concreto?" />
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "GothamRoundedBook_21018",
                  color: COLORS.borderDots,
                  textAlign: "center",
                }}
              >
                Precio
              </Text>
              <MaterialCommunityIcons
                color={COLORS.borderDots}
                size={30}
                name="chevron-down"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            {/* <Svg viewBox="0 0 201.66 203.17" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={101}
                cy={102}
                rx={101}
                ry={102}
              ></Ellipse>
            </Svg> */}
            <View style={styles.rect5}>
              <Text style={styles.pasteleriaMaria2}>Pasteleria Maria</Text>
              <Text style={styles.loremIpsum}>
                Deliciosas tartas de chocolate blaco, hechas a{"\n"}mano...
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                  <View style={styles.loremIpsum2Row}>
                    <Text style={styles.loremIpsum2}>
                      Ver catalogo completo
                    </Text>
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
            <ImageBackground
              source={require("../../assets/image/no-image.png")}
              resizeMode="contain"
              style={styles.image}
              imageStyle={styles.image_imageStyle}
            >
              <TouchableOpacity style={styles.button2}>
                <View style={styles.group}>
                  <View style={styles.rect6}>
                    <Text style={styles.patrocinado}>Patrocinado</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 300,
  },
  textHeader: {
    fontSize: 14,
    fontFamily: "GothamRoundedBook_21018",
    color: COLORS.tealBlue,
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 5,
  },
  content: { height: "100%", paddingTop: 55 },
  body: {
    paddingTop: 10,
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
  ellipse: {
    top: 0,
    left: 89,
    width: 202,
    height: 203,
    position: "absolute",
  },
  rect5: {
    top: 0,
    left: 0,
    width: 375,
    height: 441,
    position: "absolute",
  },
  pasteleriaMaria2: {
    fontFamily: "GothamRoundedBook_21018",
    color: "#121212",
    height: 20,
    width: 135,
    fontSize: 16,
    marginTop: 312,
    marginLeft: 30,
  },
  loremIpsum: {
    fontFamily: "GothamRoundedBook_21018",
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
    fontFamily: "GothamRoundedBook_21018",
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
    fontFamily: "GothamRoundedBook_21018",
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
  image: {
    top: 0,
    alignSelf: "center",
    width: 374,
    height: 292,
    position: "absolute",
    backgroundColor: "white",
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
    fontFamily: "GothamRoundedBook_21018",
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
