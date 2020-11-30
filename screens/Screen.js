import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Constants from 'expo-constants'

export default function Screen({ children, style }) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:Constants.statusBarHeight,
        // padding:11,
        flex:1
    }
})

