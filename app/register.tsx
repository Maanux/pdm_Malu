import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import FullScreen from "@/components/containers/FullScreen";
import FormInput from "@/components/form/FormInput";
import Card from "@/components/containers/Card";
import FormButton from "@/components/form/FormButton";
import { Link, useRouter } from "expo-router";

export default function register() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleRegister = () => {
    router.push("/home/home");
  };
  return (
    <FullScreen>
      <Text style={styles.header}>PDMalu</Text>
      <Card>
        <FormInput
          label="Usuario"
          value={username}
          onChangeText={setUsername}
        />
        <FormInput
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <FormInput
          label="Confirmar Senha"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          secureTextEntry={true}
        />
        <FormButton onPress={handleRegister} title="Salvar" />
      </Card>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    backgroundColor: "#0086ff",
    width: "100%",
    textAlign: "center",
    paddingVertical: 10,
    bottom: 200,
  },
});
