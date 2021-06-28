import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from "../screens/Tab1Screen";
import { Tab2Screen } from "../screens/Tab2Screen";
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from "react-native";

const { Screen, Navigator } = createBottomTabNavigator();

interface IconProps {
  color: string,
  focused: boolean,
  size: number
}

const createIcon = ({ color, focused, size }: IconProps, text: string ) => (
  <Text
    style = {{ color }}
  >
    { text }
  </Text>
)

export const Tabs = () => {
  return (
    <Navigator
    sceneContainerStyle = {{
      backgroundColor: '#fff'
    }}
      tabBarOptions = {{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          elevation: 0
        },
        labelStyle: {
          fontSize: 15
        }
      }}
      screenOptions = {({ route }) => ({
        tabBarIcon: props => createIcon( props, route.name )
      })}
    >
      <Screen
        name = "Tab1Screen"
        options = {{
          title: 'Tab1',
          tabBarIcon: props => createIcon( props, 'Tab1' )
        }}
        component = { Tab1Screen } />
      <Screen
        name = "Tab2"
        options = {{ title: 'Tab2' }}
        component = { Tab2Screen } />
      <Screen
        name = "Stack"
        options = {{ title: 'Stack' }}
        component = { StackNavigator } />
    </Navigator>
  );
}