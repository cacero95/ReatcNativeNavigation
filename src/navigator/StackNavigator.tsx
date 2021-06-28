import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Page1 } from '../screens/Page1';
import { Page2 } from '../screens/Page2';
import { Page3 } from '../screens/Page3';
import { Person } from '../screens/Person';

export type RootStackParams = {
    Page1: undefined,
    Page2: undefined,
    Page3: undefined,
    Person: { id: number, name: string },
}

const { Navigator, Screen } = createStackNavigator <RootStackParams> ();

export const StackNavigator = () => {
  return (
    <Navigator
        // initialRouteName = "" set the page in the top of the stack
        screenOptions = {{
            animationEnabled: true,
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent'
            },
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      <Screen name = "Page1" options = {{ title: 'Page 1' }} component = { Page1 } />
      <Screen name = "Page2" options = {{ title: 'Page 2' }} component = { Page2 } />
      <Screen name = "Page3" options = {{ title: 'Page 3' }} component = { Page3 } />
      <Screen name = "Person" options = {{ title: 'People' }} component = { Person } />
    </Navigator>
  );
}