import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFormikContext } from 'formik'


import colors from '../config/colors'


export default function AppButton({ title, color = "white", onPress, textColor = 'black', iconName, smallLetters }) {

    const { handleSubmit } = useFormikContext()
    return (

        <TouchableNativeFeedback
            onPress={handleSubmit}>
            <View style={[styles.button, { backgroundColor: colors[color] }]}>


                <MaterialCommunityIcons
                    name={iconName}
                    color="white"
                    size={23}
                />

                
                <Text style={[styles.buttonText, { color: colors[textColor], textTransform: smallLetters }]}>
                    {title}
                </Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({

    button: {
        width: '100%',
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        marginVertical: 12,
        flexDirection: 'row',

    },

    buttonText: {
        fontSize: 22,
        textTransform: 'uppercase',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 11
    }
})


