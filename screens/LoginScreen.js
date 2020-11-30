import React,{useContext} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


import * as Yup from 'yup'

import AppForm from '../components/forms/AppForm'
import ErrorMessage from '../components/ErrorMessage'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/SubmitButton'
import AuthContext from '../auth/context'

export default function LoginScreen(props) {


    const validationSchema = Yup.object().shape({
        email: Yup.string().required().label("Twój Email"),
        password: Yup.string().min(5).required().label("Twoje Hasło")
    })

    const authContext=useContext(AuthContext)

    const onSubmitHandler=()=>{
        authContext.setUserLogged(true)
    }

    return (
        <View style={{padding:11}}>
            <Image
                style={styles.logo}
                resizeMode='contain'
                source={require("../assets/logo.jpg")} />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={() => console.log("onSubmit")}
                validationSchema={validationSchema}
            >
                <ErrorMessage
                    error="Niepoprawny email"
                // visible={true}
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
                    title='Zaloguj'
                    color="littleDark"
                    textColor="white"
                    onPress={()=>onSubmitHandler()}
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