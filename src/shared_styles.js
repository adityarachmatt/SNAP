import { StyleSheet } from "react-native";

export const colors = StyleSheet.create({
  primary: "white",
  secondary: "#252525",
  tertiary: "black",
});

export const typography = StyleSheet.create({
  h1: {
    fontWeight: "bold",
    fontSize: 40,
    color: colors.primary,
  },
});
