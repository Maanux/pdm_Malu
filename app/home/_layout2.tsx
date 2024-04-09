import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

export default function _layout2() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" options={{ tabBarLabel: "home" }} />
      <Tabs.Screen
        name="Departamentos"
        options={{ tabBarLabel: "Departamentos" }}
      />
      <Tabs.Screen name="Favoritos" options={{ tabBarLabel: "Favoritos" }} />
      <Tabs.Screen name="Sacola" options={{ tabBarLabel: "Sacola" }} />
      <Tabs.Screen name="SuaConta" options={{ tabBarLabel: "Sua Conta" }} />
    </Tabs>
  );
}
