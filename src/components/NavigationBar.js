import { View, Text, Pressable, StyleSheet } from "react-native";

export default function NavigationBar({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Team')} style={styles.button}>
        <Text style={styles.text}>Team</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Logs')} style={styles.button}>
        <Text style={styles.text}>Logs</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Settings')} style={styles.button}>
        <Text style={styles.text}>Settings</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  button: {
    padding: 10,
  },
  text: {
    color: 'white',
  },
});
