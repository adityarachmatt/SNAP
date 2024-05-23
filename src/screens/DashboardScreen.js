import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
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
import CircularProgress from "react-native-circular-progress-indicator";

const DATA = [
  {
    name: "Joanna Park",
    indices: {
      burnout: 10,
      isolation: 10,
      overload: 10,
      composite: 10,
    },
  },
  {
    name: "George Lee",
    indices: {
      burnout: 10,
      isolation: 10,
      overload: 10,
      composite: 10,
    },
  },
  {
    name: "Albert Smith",
    indices: {
      burnout: 10,
      isolation: 10,
      overload: 10,
      composite: 10,
    },
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
            renderItem={({ item }) => (
              <TeamMember name={item.name} indices={item.indices} />
            )}
            contentContainerStyle={styles.bottomSheetContainer}
          />
        </BottomSheet>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const TeamMember = ({ name, indices }) => {
  const { burnout, isolation, overload, composite } = indices;
  return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: 60, width: 60, marginRight: 15 }}
            source={require("../../assets/female-profile.png")}
          />
          <Text style={typography.h3}>{name}</Text>
        </View>
        <CircularProgress value={composite} radius={30} />
      </View>
      <Text style={[typography.content_bold, { marginBottom: 10 }]}>
        Indices
      </Text>
      <Text style={typography.content_default}>
        BURNOUT {burnout} • ISOLATION {isolation} • OVERLOAD {overload}
      </Text>
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
});

export default DashboardScreen;
