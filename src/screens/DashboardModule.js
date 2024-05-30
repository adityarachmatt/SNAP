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
    name: "Wei",
    image: "wei",
    indices: {
      reciprocity: 71,
      isolation: 52,
      composite: 65,
    },
  },
  {
    name: "Anil",
    image: "anil",
    indices: {
      reciprocity: 59,
      isolation: 68,
      composite: 62,
    },
  },
  {
    name: "Carlos",
    image: "carlos",
    indices: {
      reciprocity: 70,
      isolation: 52,
      composite: 60,
    },
  },
  {
    name: "Ana",
    image: "ana",
    indices: {
      reciprocity: 45,
      isolation: 72,
      composite: 55,
    },
  },
  {
    name: "Shanice",
    image: "shanice",
    indices: {
      reciprocity: 72,
      isolation: 40,
      composite: 50,
    },
  },
  {
    name: "Jessica",
    image: "jessica",
    indices: {
      reciprocity: 50,
      isolation: 42,
      composite: 47,
    },
  },
  {
    name: "John",
    image: "john",
    indices: {
      reciprocity: 33,
      isolation: 30,
      composite: 42,
    },
  },
];

const LOG_DATA = [
  {
    medium: "Slack",
    sender: "Wei",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:30am",
  },
  {
    medium: "Slack",
    sender: "Wei",
    recipient: "Anil",
    type: "Direct Message",
    time: "10:22am",
  },
  {
    medium: "Slack",
    sender: "Anil",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:21am",
  },
  {
    medium: "Slack",
    sender: "Wei",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:20am",
  },
  {
    medium: "Slack",
    sender: "Carlos",
    recipient: "John",
    type: "Direct Message",
    time: "10:15am",
  },
  {
    medium: "Slack",
    sender: "Carlos",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:10am",
  },
  {
    medium: "Slack",
    sender: "Shanice",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:07am",
  },
  {
    medium: "Slack",
    sender: "Shanice",
    recipient: "John",
    type: "Direct Message",
    time: "10:04am",
  },
  {
    medium: "Slack",
    sender: "John",
    recipient: "#general",
    type: "Broadcast Message",
    time: "10:02am",
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
      <View style={{ width: "100%", alignItems: "center" }}>
        {routeName === "Team" && (
          <Image
            source={require("../../assets/team-chart.png")}
            style={{ height: 300, width: 300 }}
          />
        )}
        {routeName === "Logs" && (
          <Image
            source={require("../../assets/logs-chart.png")}
            style={{ height: 300, width: 300 }}
          />
        )}
      </View>
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
                <TeamMember
                  name={item.name}
                  image={item.image}
                  indices={item.indices}
                />
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

const TeamMember = ({ name, image, indices }) => {
  const { reciprocity, isolation, overload, composite } = indices;
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
          {image === "ana" && (
            <Image
              style={{ height: 60, width: 60, marginRight: 15 }}
              source={require("../../assets/ana.png")}
            />
          )}
          {image === "anil" && (
            <Image
              style={{ height: 60, width: 60, marginRight: 15 }}
              source={require("../../assets/anil.png")}
            />
          )}
          {image === "carlos" && (
            <Image
              style={{ height: 60, width: 60, marginRight: 15 }}
              source={require("../../assets/carlos.png")}
            />
          )}
          {image === "jessica" && (
            <Image
              style={{ height: 60, width: 60, marginRight: 15 }}
              source={require("../../assets/jessica.png")}
            />
          )}
          {image === "john" && (
            <Image
              style={{ height: 60, width: 60, marginRight: 15 }}
              source={require("../../assets/john.png")}
            />
          )}
          {image === "shanice" && (
            <Image
              style={{ height: 60, width: 60, marginRight: 15 }}
              source={require("../../assets/shanice.png")}
            />
          )}
          {image === "wei" && (
            <Image
              style={{ height: 60, width: 60, marginRight: 15 }}
              source={require("../../assets/wei.png")}
            />
          )}
          <Text style={typography.h3}>{name}</Text>
        </View>
        <CircularProgress value={composite} radius={30} />
      </View>
      <Text style={[typography.content_bold, { marginBottom: 10 }]}>
        Indices
      </Text>
      <Text style={typography.content_default}>
        RECIPROCITY {reciprocity} • ISOLATION {isolation}
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
