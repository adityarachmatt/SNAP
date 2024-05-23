import { View, Text, Pressable, StyleSheet } from "react-native";

export default function NavigationBar({ contentContainerStyle }) {
  return (
    <View style={[styles.container, contentContainerStyle]}>
      <Text style={{ color: "white" }}>NavigationBar</Text>
      <Pressable></Pressable>
      <View>
        <Pressable></Pressable>
        <Pressable></Pressable>
      </View>
      <Pressable></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
  },
});
