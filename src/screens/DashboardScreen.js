import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { BlurView } from "expo-blur";
import { colors, typography } from "../shared_styles";
import NavigationBar from "../components/NavigationBar";

// Use react native bottom sheet
// https://galaxies.dev/react-native-bottom-sheet
// https://ui.gorhom.dev/components/bottom-sheet/usage
// changed babel as well for react native gesture handler

import BottomSheet, {
  BottomSheetModalProvider,
  BottomSheetView,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DATA = [
  {
    name: "First Item",
  },
  {
    name: "Second Item",
  },
  {
    name: "Third Item",
  },
];

const DashboardScreen = ({ navigation, route }) => {
  // TODO ADD BACKEND SYNC TO STATE
  const snapPoints = useMemo(() => ["30.3%", "75%", "100%"], []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={[typography.h1, { marginTop: 50 }]}>Team</Text>
      <NavigationBar
        contentContainerStyle={{ position: "absolute", bottom: 400, ZIndex: 1 }}
      />
      <BottomSheetModalProvider>
        <BottomSheet
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: "transparent" }}
          handleIndicatorStyle={{ backgroundColor: "white" }}
        >
          <BottomSheetView></BottomSheetView>
          <BottomSheetFlatList
            data={DATA}
            keyExtractor={(i) => i}
            renderItem={({ item }) => <ListItem name={item.name} />}
            contentContainerStyle={styles.bottomSheetContainer}
          />
        </BottomSheet>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const ListItem = ({ name }) => {
  return (
    <View style={styles.listItem}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "blue",
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  listItem: {
    height: 200,
  },
});

export default DashboardScreen;
