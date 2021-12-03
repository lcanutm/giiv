import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {
  CONTACT_LIST_SCREEN,
  GIFTS_HISTORICAL_SCREEN,
  GIFTS_SCREEN,
  HOME_SCREEN,
} from "../../constant/screenNames";
import Home from "../../screens/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../common/colors";
import Gifts from "../../screens/gifts";
import ContactList from "../../screens/contactsList";
import { createStackNavigator } from "@react-navigation/stack";
import GiftsHistorical from "../../screens/giftsHistorical";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabButton = ({ label, icon, onPress, accessibilityState }) => {
  let focused = accessibilityState.selected;
  return (
    <View style={{ height: 55, width: "33.33%" }}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image style={styles.icon} source={icon} />
        {label && (
          <Text
            style={[
              styles.label,
              { color: focused ? "rgba(29, 158, 112, 1)" : COLORS.gunmetal },
            ]}
          >
            {label}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const StackGifts = () => {
  return (
    <Stack.Navigator
      initialRouteName={GIFTS_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={GIFTS_SCREEN} component={Gifts} />
      <Stack.Screen
        name={GIFTS_HISTORICAL_SCREEN}
        component={GiftsHistorical}
      />
    </Stack.Navigator>
  );
};

const TabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bar,
      }}
    >
      <Tab.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <Image
                style={styles.icon}
                source={require("../../assets/image/no-image.png")}
              />
            );
          },
          tabBarButton: (props) => (
            <TabButton
              label="Catalogo"
              {...props}
              icon={require("../../assets/image/no-image.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Gifts"}
        component={StackGifts}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <Image
                style={styles.icon}
                source={require("../../assets/image/no-image.png")}
              />
            );
          },
          tabBarButton: (props) => (
            <TabButton
              {...props}
              icon={require("../../assets/image/no-image.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name={CONTACT_LIST_SCREEN}
        component={ContactList}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <Image
                style={styles.icon}
                source={require("../../assets/image/no-image.png")}
              />
            );
          },
          tabBarButton: (props) => (
            <TabButton
              label="Contactos"
              {...props}
              icon={require("../../assets/image/no-image.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    height: 55,
    position: "absolute",
    bottom: 40,
    right: 16,
    left: 16,
    paddingHorizontal: 10,
    borderRadius: 30,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  label: {
    // fontFamily
    fontSize: 12,
  },
});
