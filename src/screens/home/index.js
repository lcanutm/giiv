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
import { categorySearch, products, thematic } from "../../constant/data";

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
            contentContainerStyle={{ marginLeft: dimensions.width * 0.05 }}
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
        <Text style={styles.textHeader}>¿Qué te gustaría regalar?</Text>

        <View style={styles.etiquetas}>
          <FlatList
            contentContainerStyle={{
              width: "100%",
              paddingLeft: 12,
              marginTop: 12,
              paddingBottom: 16,
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
        </View>
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
          keyExtractor={(_, index) => {
            return index;
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
  contentInput: {
    marginHorizontal: 12,
  },
  etiquetas: {
    alignItems: "center",
    height: 62,
    justifyContent: "center",
  },
});
