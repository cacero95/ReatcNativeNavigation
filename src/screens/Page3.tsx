import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {};

export const Page3 = ( { navigation }: Props ) => {
    return (
        <View style = { styles.globalMargin }>
            <Text style = { styles.title }>Page 3</Text>
            <Button
                title = "Back"
                onPress = { () => navigation.pop() }
            />
            <Button
                title = "Back to Home"
                onPress = { () => navigation.popToTop() }
            />
        </View>
    )
}
