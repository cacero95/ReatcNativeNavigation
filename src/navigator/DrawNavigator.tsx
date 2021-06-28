import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from "react-native";

const { Navigator, Screen } = createDrawerNavigator();

export const DrawerNavigator = () => {
    const { width } = useWindowDimensions();
    return (
      <Navigator
        drawerType = { width >= 678 ? "permanent" : "front" }
      >
        <Screen name = "StackNavigator" options = {{ title: 'Home' }} component = { StackNavigator } />
        <Screen name = "Settings" options = {{ title: 'Settings' }} component = { SettingsScreen } />
      </Navigator>
    );
}