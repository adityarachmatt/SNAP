import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DashboardScreen from "./src/screens/DashboardScreen";

export default function App() {
  return <DashboardScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
