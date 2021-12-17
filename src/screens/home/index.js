import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../common/colors";
import { dimensions } from "../../common/styles";
import InputSearch from "../../components/inputSearch";
import ButtonCategory from "./components/buttonCategory";
import CardTheme from "./components/cardTheme";
import ContactListModal from "../contactsListcopy";
import PriceRange from "../priceRange";
import CardProduct from "../../components/cardProduct";
import DatailsProducts3 from "../details1copy3";
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
const categorySearch = [
  { title: "Nuevo" },
  { title: "Comida" },
  { title: "Casa" },
  { title: "Infantil" },
];

const products = [
  {
    image: require("../../assets/image/no-image.png"),
    name: "Pastelería María",
    description:
      "Descubre nuestras tartas artesanales frescas, con ingredientes de la mejor calidad. Tartas 0% Azúcar. Tartas Sin Lactosa. ",
    precio: 22,
  },
  {
    image: require("../../assets/image/no-image.png"),
    name: "Pastelería Tartevere",
    description:
      "En Blasé no concebimos que un producto no sea de calidad, por eso trabajamos mano a mano con nuestros artesanos",
    precio: 65,
  },
  {
    image: require("../../assets/image/no-image.png"),
    name: "Blase",
    description:
      "Tienda gourmet con productos delicatessen de España, cajas y cestas de regalo personalizadas, vinos de gran formato y edición limitada.",
    precio: 18,
  },
];

const Home = ({ navigation }) => {
  const [visibleContacts, setVisibleContacts] = useState(false);
  const [visiblePrice, setVisiblePrice] = useState(false);
  const [visibleDetailsProducts, setVisibleDetailsProducts] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={["rgba(65 ,143, 222,0.2)", "white"]}
          style={styles.content}
        >
          <View style={styles.contentInput}>
            <InputSearch
              onChangeText={() => {
                setVisibleContacts(!visibleContacts);
              }}
              placeholder="¿A quién quieres regalar?"
            />
          </View>

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
              return (
                <CardTheme
                  title={item.title}
                  color={item.color}
                  icono={item.icono}
                />
              );
            }}
          />
        </LinearGradient>
      </View>
      <View style={styles.body}>
        <View style={{ marginBottom: -24 }}>
          <Text style={styles.textHeader}>¿Qué te gustaría regalar?</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.etiquetas}
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
            marginHorizontal: 12,
            justifyContent: "flex-end",
            marginBottom: 16,
          }}
        >
          <View style={{ width: "85%" }}>
            <InputSearch placeholder="¿Buscas algo concreto?" />
          </View>
          <TouchableOpacity
            onPress={() => setVisiblePrice(true)}
            style={{
              flex: 1,
              height: 44,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Rounded1cRegular",
                  color: COLORS.gris,
                  textAlign: "center",
                  marginBottom: -8,
                }}
              >
                Precio
              </Text>
              <MaterialCommunityIcons
                color={COLORS.turquesa}
                size={30}
                name="chevron-down"
              />
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          contentContainerStyle={{ marginHorizontal: 12 }}
          data={products}
          keyExtractor={(item) => {
            return item.name;
          }}
          // ItemSeparatorComponent={() => {
          //   return <View style={{ width: 10 }}></View>;
          // }}
          renderItem={({ item }) => {
            return (
              <CardProduct
                name={item.name}
                description={item.description}
                image={item.image}
                precio={item.precio}
                onPress={() => {
                  setCurrentProduct(item);
                  setVisibleDetailsProducts(true);
                }}
              />
            );
          }}
        />
      </View>

      {visibleContacts && <ContactListModal visible={setVisibleContacts} />}
      {visiblePrice && <PriceRange visible={setVisiblePrice} />}
      {visibleDetailsProducts && (
        <DatailsProducts3
          navigation={navigation}
          name={currentProduct.name}
          description={currentProduct.description}
          image={currentProduct.image}
          visible={setVisibleDetailsProducts}
        />
      )}
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
    backgroundColor: COLORS.white,
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
    top: 0,
    left: 0,
    width: 375,
    height: 441,
    position: "absolute",
  },
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
});
