import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <Text>Hello from Registration Screen</Text>
        </View>
    )
}
RegisterScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})