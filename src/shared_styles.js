import { StyleSheet } from "react-native";

export const colors = StyleSheet.create({
  primary: "white",
  secondary: "#252525",
  tertiary: "black",
});

export const colors2 = StyleSheet.create({
  primaryColor: "#141414",
  secondaryColor: "#ffffff",
  tertiaryColor: "#666",
  accentColor: "#b3e0ff",
  gray3: "#404040",
  gray4: "#252525",
  glassyGray4: "rgba(25, 25, 25, 1)",
  appleGreen: "#30D158",
});

export const typography = StyleSheet.create({
  h1: {
    fontWeight: "bold",
    fontSize: 40,
    color: colors.primary,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 20,
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

export const typography2 = StyleSheet.create({
  largerBold: {
    color: colors2.secondaryColor,
    fontFamily: "Inter-Bold",
    fontSize: 20,
  },
  largeBold: {
    color: colors2.secondaryColor,
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  largeBlackBold: {
    color: colors2.primaryColor,
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  large: {
    color: colors2.secondaryColor,
    fontFamily: "Inter-Regular",
    fontSize: 16,
  },
  default: {
    color: colors2.secondaryColor,
    fontFamily: "Inter-Regular",
  },
  defaultBlack: {
    color: colors2.primaryColor,
    fontFamily: "Inter-Regular",
  },
  defaultBold: {
    color: colors2.secondaryColor,
    fontFamily: "Inter-Bold",
  },
  small: {
    color: colors2.secondaryColor,
    fontFamily: "Inter-Regular",
    fontSize: 12,
  },
  smallBold: {
    color: colors2.secondaryColor,
    fontFamily: "Inter-Bold",
    fontSize: 12,
  },
  smallBlack: {
    color: colors2.primaryColor,
    fontFamily: "Inter-Regular",
    fontSize: 12,
  },
});

export const constants = {
  MARGIN: 20,
};
