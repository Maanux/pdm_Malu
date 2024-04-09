import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Scrollable from "@/components/containers/Scrollable";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import { MaterialIcons } from "@expo/vector-icons";

export default function home() {
  return (
    <Scrollable>
      <HeaderWithTitle title="Tela inicial" />
      <View style={styles.bloco1}>
        <TextInput placeholder="Busca no PDmalu" style={styles.header} />
      </View>
      <Text style={styles.bloco2}>Enviar para Guarapuava - 85050-230 </Text>

      <View style={styles.alinhar}>
        <Text>Produto</Text>
        <Text>Produto</Text>
        <Text>Produto</Text>
        <Text>Produto</Text>
        <Text>Produto</Text>
        <Text>Produto</Text>
      </View>
    </Scrollable>
  );
}
const styles = StyleSheet.create({
  alinhar: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    marginTop: 10,
  },
  bloco1: {
    backgroundColor: "#0086ff",
    width: "100%",
    height: 80,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 13,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: "black",
    width: 350,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
  },
  bloco2: {
    backgroundColor: "#0073da",
    width: "100%",
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
  },
});
