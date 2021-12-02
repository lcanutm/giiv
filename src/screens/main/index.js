import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {
  CONTACT_LIST_SCREEN,
  GIFTS_SCREEN,
  HOME_SCREEN,
} from "../../constant/screenNames";
import Home from "../home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../common/colors";
import Gifts from "../gifts";
import ContactList from "../contactsList";

const Tab = createBottomTabNavigator();

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

const MainNavigation = ({ navigation }) => {
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
        name={GIFTS_SCREEN}
        component={Gifts}
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
export default MainNavigation;

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
