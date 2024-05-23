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
  h3: {
    fontWeight: "700",
    fontSize: 18,
    color: colors.primary,
  },
  content_bold: {
    fontWeight: "700",
    fontSize: 14,
    color: colors.primary,
  },
  content_default: {
    fontWeight: "400",
    fontSize: 14,
    color: colors.primary,
  },
});
