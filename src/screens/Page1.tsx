import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps <any, any> {};

export const Page1 = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => ( // return a jsx element
                <Button
                    title = "Menu"
                    onPress = { () => navigation.toggleDrawer() }
                />
            )
        })
    }, [])

    return (
        <View style = { styles.globalMargin }>
            <Text style = { styles.title }>Page1 screen</Text>
            <Button
                title = "Go page 2"
                onPress = { () => navigation.navigate('Page2')  }
            />
            <View style = {{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style = {{ ...styles.bidButton, backgroundColor: 'red' }}
                    onPress = { 
                        () => navigation.navigate('Person', {
                            id: 1,
                            name: 'pedro'
                        })
                    }
                >
                    <Text style = {{ color: 'white' }}>
                        Go to Pedro
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {{ ...styles.bidButton, backgroundColor: 'blue' }}
                    onPress = { 
                        () => navigation.navigate('Person', {
                            id: 1,
                            name: 'maria'
                        })
                    }
                >
                    <Text style = {{ color: 'white' }}>
                        Go to maria
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
