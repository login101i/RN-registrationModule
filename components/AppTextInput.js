import React from 'react'
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'

export default function AppTextInput({ icon, color = "black", size = 44, width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons
                style={styles.iconka}
                name={icon}
                color={color}
                size={size}
            />}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        flexDirection: 'row',
        // width: '100%',
        padding: 10,
        marginVertical: 10
    },
    iconka: {
        marginRight: 10
    }


})
