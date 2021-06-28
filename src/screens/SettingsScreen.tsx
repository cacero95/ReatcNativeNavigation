import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets(); // this hooks works like safeArea

    const { authState, signIn } = useContext( AuthContext );

    return (
        <View 
            style = {{ 
                ...styles.globalMargin,
                marginTop: insets.top + 20 
            }}
        >
            <Text>Settings screen</Text>
            <Button
                title = "init"
                onPress = {
                    () => signIn('andres')
                }
            />
            <Text>
                { JSON.stringify( authState, null, 4 ) }
            </Text>
        </View>
    )
}
