import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SettingsList1, SettingsList2 } from "../components/SettingsList";
import { typography } from "../shared_styles";

const MARGIN = 20;

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[typography.h1, { margin: MARGIN }]}>Settings</Text>
      <Text style={[typography.h2, { margin: MARGIN }]}>Team Settings</Text>
      <SettingsList1 />
      <Text style={[typography.h2, { margin: MARGIN }]}>Integrations</Text>
      <SettingsList2 />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: MARGIN,
    height: "100%",
  },
});
