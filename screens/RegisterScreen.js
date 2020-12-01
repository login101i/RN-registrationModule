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
import userApi from '../api/users'
import useAuth from '../auth/useAuth'
import useApiHook from '../hooks/useApi'
import ActivityIndicator from '../components/ActivityIndicator'

export default function RegisterScreen(props) {
    const [loginFailed, setLoginFailed] = useState()
    const [error, setError] = useState()





    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label("Name"),
        email: Yup.string().required().label("Twój Email"),
        password: Yup.string().min(5).required().label("Twoje Hasło")

    })

    const authContext = useContext(AuthContext)

    const onSubmitHandler = () => {
        authContext.setUserLogged(true)
    }


    const autoryzacjaAndStorage = useAuth()

    const registerApi = useApiHook(userApi.register)
    const loginApi = useApiHook(authApi.login)


    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo)
        console.log("111")

        if (!result.ok) {
            if (result.data) {
                setError(result.data.error)
                console.log(error)
            }
            else {
                setError("Niespodziewany bład przy rejestracji")
                console.log(result)
            }
            return
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        )
        autoryzacjaAndStorage.logIn(authToken)
    

        // const result2 = await loginApi.request(userInfo.email, userInfo.password)
        // console.log(result2.data)
        // const newUser=jwtDecode(result2.data)
        // console.log(newUser)
        // authContext.setUserLogged(newUser)
        // AuthStorage.storeToken(result2.data)

        // auth.logIn(result2.data)
        // console.log("222")
    }



    return (
        <>
            <ActivityIndicator visible={loginApi.loading || registerApi.loading} />
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
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >

                    <AppFormField
                        icon="email"
                        name="name"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Twoje imię"

                    />


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
                        title='Zarejestruj się'
                        color="littleDark"
                        textColor="white"
                    />

                </AppForm>

            </View >
        </>
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
    },
    logo: {
        width: 300,
        height: 300,
        borderRadius: 150,

        alignSelf: 'center',
    }
})