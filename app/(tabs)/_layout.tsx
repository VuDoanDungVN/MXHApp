import { Tabs } from "expo-router";
import React from "react";
import Foundation from "@expo/vector-icons/Foundation";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Foundation
              name={focused ? "home" : "home"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Tìm kiếm",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={focused ? "search" : "search"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "#c90037",
                height: 70,
                width: 70,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                top: -10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
              }}
            >
              <FontAwesome6
                name={focused ? "add" : "add"}
                color={"#fff"}
                size={30}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="heart"
        options={{
          title: "Yêu thích",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={focused ? "heart" : "hearto"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "User",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tabs>
  );
}
