import { StyleSheet } from "react-native";

export const colors = {
    primary: '#28425B'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 20
    },
    bidButton: {
        marginTop: 20,
        marginRight: 10,
        width: 100,
        height: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
    },
    menuItem: {
        marginVertical: 10,
        backgroundColor: 'rgba( 40, 66, 91, 0.9 )',
        paddingVertical: 10,
        borderRadius: 10
    },

    menuTxt: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }

});