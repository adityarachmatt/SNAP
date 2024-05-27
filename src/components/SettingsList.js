import React, { useState } from "react";
import { View, Text, Pressable, Switch, StyleSheet, Image } from "react-native";
import DirectMessagesIcon from "../icons/DirectMessagesIcon";
import LeaveIcon from "../icons/LeaveIcon";
import MuteIcon from "../icons/MuteIcon";
import { colors2, typography2 } from "../shared_styles";

const DEFAULT_SETTINGS_1 = {
  mute: true,
  direct_messages: false,
};

const DEFAULT_SETTINGS_2 = {
  slack: true,
  google: false,
  teams: true,
};

export const SettingsList1 = () => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS_1);
  return (
    <View>
      <ToggleableSettingsRow
        icon="mute"
        settingName="Mute"
        isEnabled={settings.mute}
        styleModifier={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        toggle={() => {
          setSettings((prevState) => ({ ...prevState, mute: !prevState.mute }));
        }}
      />
      <ToggleableSettingsRow
        icon="direct_messages"
        settingName="Allow direct messages"
        isEnabled={settings.direct_messages}
        toggle={() => {
          setSettings((prevState) => ({
            ...prevState,
            direct_messages: !prevState.direct_messages,
          }));
        }}
      />
      <PressableSettingsRow
        icon="leave"
        settingName="Leave"
        onPress={() => console.log("Pressed leave")}
        styleModifier={{
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderBottomWidth: 0,
        }}
      />
    </View>
  );
};

export const SettingsList2 = () => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS_2);
  return (
    <View>
      <ToggleableSettingsRow
        icon="slack"
        settingName="Slack"
        isEnabled={settings.slack}
        styleModifier={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        toggle={() => {
          setSettings((prevState) => ({
            ...prevState,
            slack: !prevState.slack,
          }));
        }}
      />
      <ToggleableSettingsRow
        icon="google"
        settingName="Google"
        isEnabled={settings.google}
        toggle={() => {
          setSettings((prevState) => ({
            ...prevState,
            google: !prevState.google,
          }));
        }}
      />
      <ToggleableSettingsRow
        icon="teams"
        settingName="Teams"
        isEnabled={settings.teams}
        styleModifier={{
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderBottomWidth: 0,
        }}
        toggle={() => {
          setSettings((prevState) => ({
            ...prevState,
            teams: !prevState.teams,
          }));
        }}
      />
    </View>
  );
};

const PressableSettingsRow = ({
  icon,
  settingName,
  onPress,
  styleModifier,
}) => {
  return (
    <Pressable style={[styles.settingsRow, styleModifier]} onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {iconSwitch(icon)}
        <View style={{ width: 10 }} />
        <Text style={typography2.large}>{settingName}</Text>
      </View>
    </Pressable>
  );
};

const ToggleableSettingsRow = ({
  icon,
  settingName,
  isEnabled,
  styleModifier,
  toggle,
}) => {
  return (
    <View style={[styles.settingsRow, styleModifier]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {iconSwitch(icon)}
        <View style={{ width: 10 }} />
        <Text style={typography2.large}>{settingName}</Text>
      </View>
      <Pressable onPress={toggle}>
        <Switch
          trackColor={{ false: "#767577", true: colors2.appleGreen }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggle}
          value={isEnabled}
        />
      </Pressable>
    </View>
  );
};

const iconSwitch = (iconName) => {
  switch (iconName) {
    case "mute":
      return <MuteIcon />;
    case "direct_messages":
      return <DirectMessagesIcon />;
    case "leave":
      return <LeaveIcon />;
    case "google":
      return (
        <Image
          source={require("../../assets/google-icon.png")}
          style={{ height: 25, width: 25 }}
        />
      );
    case "slack":
      return (
        <Image
          source={require("../../assets/slack-icon.png")}
          style={{ height: 25, width: 25 }}
        />
      );
    case "teams":
      return (
        <Image
          source={require("../../assets/teams-icon.png")}
          style={{ height: 25, width: 25 }}
        />
      );
  }
};

const styles = StyleSheet.create({
  settingsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors2.gray4,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    alignItems: "center",
  },
});
