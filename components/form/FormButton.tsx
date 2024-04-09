import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type FormInput = {
  title: string;
} & TouchableOpacityProps;

export default function FormButton({ title, ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "#0086ff",
    borderRadius: 4,
    padding: 16,
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
});
