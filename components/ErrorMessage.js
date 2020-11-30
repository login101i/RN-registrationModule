import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import SimpleText from './SimpleText'

export default function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null
    return (
        <View>
            <SimpleText txtColor="red">{error}</SimpleText>

        </View>
    )
}

const styles = StyleSheet.create({})
