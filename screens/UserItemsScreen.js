import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Hello from UserItemsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
