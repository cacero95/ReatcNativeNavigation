import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, TouchableOpacity, useWindowDimensions, View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const { Navigator, Screen } = createDrawerNavigator();

export const SideMenu = () => {
    const { width } = useWindowDimensions();
    return (
      <Navigator
        drawerType = { width >= 678 ? "permanent" : "front" }
        drawerContent = { props => <InternContent { ...props } /> }
      >
        <Screen name = "tabs" component = { Tabs } />
        <Screen name = "Settings" options = {{ title: 'Settings' }} component = { SettingsScreen } />
      </Navigator>
    );
}

const InternContent = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions> ) => {
    return (
        <DrawerContentScrollView>
            <View style = { styles.avatarContainer }>
                <Image
                    source = {{
                        uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif'
                    }}
                    style = { styles.avatar }
                />
            </View>
            <View style = { styles.menuContainer }>

                <TouchableOpacity 
                    style = { styles.menuItem }
                    onPress = { () => navigation.navigate('tabs') }
                >
                    <Text style = { styles.menuTxt }>Navigation Tabs</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = { styles.menuItem }
                    onPress = { () => navigation.navigate('Settings') }
                >
                    <Text style = { styles.menuTxt }>Settings</Text>
                </TouchableOpacity>

            </View>
        </DrawerContentScrollView>
    )
}
