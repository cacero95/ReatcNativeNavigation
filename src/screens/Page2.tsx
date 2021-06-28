import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Page2 = () => {

    const navigator = useNavigation();
    useEffect(() => {
        navigator.setOptions({
            title: 'Hi there',
            headerBackTitle: 'Back' // only in ios
        })
    }, [])
    return (
        <View style = { styles.globalMargin }>
            <Text style = { styles.title }>Page 2</Text>
            <Button
                title = "Go page 3"
                onPress = { () => navigator.navigate('Page3') }
            />
        </View>
    )
}
