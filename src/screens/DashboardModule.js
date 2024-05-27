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
import { colors, typography, constants } from "../shared_styles";

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

const LOG_DATA = [
  {
    medium: "Slack",
    sender: "Albert",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:30am",
  },
  {
    medium: "Slack",
    sender: "Albert",
    recipient: "George",
    type: "Direct Message",
    time: "10:22am",
  },
  {
    medium: "Slack",
    sender: "George",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:21am",
  },
  {
    medium: "Slack",
    sender: "Albert",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:20am",
  },
  {
    medium: "Slack",
    sender: "Albert",
    recipient: "George",
    type: "Direct Message",
    time: "10:15am",
  },
  {
    medium: "Slack",
    sender: "George",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:30am",
  },
  {
    medium: "Slack",
    sender: "Albert",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:30am",
  },
  {
    medium: "Slack",
    sender: "Albert",
    recipient: "George",
    type: "Direct Message",
    time: "10:22am",
  },
  {
    medium: "Slack",
    sender: "George",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:30am",
  },
];

const DashboardModule = ({ navigation, route }) => {
  // TODO ADD BACKEND SYNC TO STATE
  const snapPoints = useMemo(() => ["30.3%", "75%", "200%"], []);
  const routeName = route.name;

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text
        style={[
          typography.h1,
          {
            paddingHorizontal: constants.MARGIN * 2,
            paddingTop: constants.MARGIN * 2,
          },
        ]}
      >
        {routeName}
      </Text>
      <BottomSheetModalProvider>
        <BottomSheet
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: "transparent" }}
          handleIndicatorStyle={{ backgroundColor: "white" }}
        >
          <BottomSheetView></BottomSheetView>
          {routeName === "Team" && (
            <BottomSheetFlatList
              data={DATA}
              keyExtractor={(i) => i}
              renderItem={({ item }) => (
                <TeamMember name={item.name} indices={item.indices} />
              )}
              contentContainerStyle={styles.bottomSheetContainer}
            />
          )}
          {routeName === "Logs" && (
            <BottomSheetFlatList
              data={LOG_DATA}
              keyExtractor={(i) => i}
              renderItem={({ item }) => (
                <Log
                  medium={item.medium}
                  sender={item.sender}
                  recipient={item.recipient}
                  type={item.type}
                  time={item.time}
                />
              )}
              contentContainerStyle={styles.bottomSheetContainer}
            />
          )}
        </BottomSheet>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const Log = ({ medium, sender, recipient, type, time }) => {
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
        <Text style={typography.h3}>{medium}</Text>
        <Text style={typography.h3}>{time}</Text>
      </View>
      <Text style={[typography.content_bold, { marginBottom: 10 }]}>
        {sender} to {recipient}
      </Text>
      <Text style={typography.content_default}>{type}</Text>
    </View>
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
    backgroundColor: "black",
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});

export default DashboardModule;
