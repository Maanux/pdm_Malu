import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import FullScreen from "@/components/containers/FullScreen";
import FormInput from "@/components/form/FormInput";
import Card from "@/components/containers/Card";
import FormButton from "@/components/form/FormButton";
import { MaterialIcons } from "@expo/vector-icons";

export default function index() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  const handleLogin = () => {
    router.push("./home/home");
  };

  const handleOnOff = () => {
    setPasswordHidden(!passwordHidden);
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
          secureTextEntry={passwordHidden}
        />
        <TouchableOpacity onPress={handleOnOff} style={styles.iconContainer}>
          <MaterialIcons
            name={passwordHidden ? "visibility-off" : "visibility"}
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <FormButton onPress={handleLogin} title="Logar" />

        <Link href="/register">Novo por aqui? Registre-se!</Link>
      </Card>
    </FullScreen>
  );
}
const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    position: "relative",
    left: 300,
    bottom: 45,
  },

  header: {
    fontSize: 40,
    backgroundColor: "#0086ff",
    width: "100%",
    textAlign: "center",
    paddingVertical: 10,
    bottom: 210,
  },
});
