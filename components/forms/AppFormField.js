import React from 'react'
import { StyleSheet, Text, View, Keyboard } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from '../ErrorMessage'

export default function AppFormField({ name, width, ...otherProps }) {

    const { handleChange, setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext()
    return (

        <View >
            <AppTextInput
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </View>
    )
}

const styles = StyleSheet.create({})
