import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


import * as Yup from 'yup'

import AppForm from '../components/forms/AppForm'
import ErrorMessage from '../components/ErrorMessage'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/SubmitButton'
import AuthContext from '../auth/context'
import authApi from '../api/auth'
import jwtDecode from 'jwt-decode'
import AuthStorage from '../auth/storage'

export default function LoginScreen(props) {
    const [loginFailed, setLoginFailed] = useState()


    const validationSchema = Yup.object().shape({
        email: Yup.string().required().label("Twój Email"),
        password: Yup.string().min(5).required().label("Twoje Hasło")
    })

    const authContext = useContext(AuthContext)

    const onSubmitHandler = () => {
        authContext.setUserLogged(true)
    }



    const handleSubmit = async ({ email, password }) => {
        console.log("hahahha")
        const result = await authApi.login(email, password)
        console.log(email, password)
        if (!result.ok) return setLoginFailed(true)
        setLoginFailed(false)
        console.log(result.data)
        const user=jwtDecode(result.data)
        console.log(user)
        authContext.setUserLogged(user)
        AuthStorage.storeToken(result.data)
    }



    return (
        <View style={{ padding: 11 }}>
            <Image
                style={styles.logo}
                resizeMode='contain'
                source={require("../assets/logo.jpg")} />
            <ErrorMessage
                error="Invalid email or/and password"
                visible={loginFailed}
            />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >



                <AppFormField
                    icon="email"
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Twój email"
                    textContentType='emailAddress'
                    keyboardType="email-address"

                />
                <AppFormField
                    icon="lock"
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Twoje hasło"
                    textContentType='password'
                    secureTextEntry
                />

                <SubmitButton
                    title='Zaloguj'
                    color="littleDark"
                    textColor="white"
                />
            </AppForm>




        </View >
    )
}

LoginScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 300,
        height: 300,
        borderRadius: 150,

        alignSelf: 'center',
        marginTop: 50
    }
})