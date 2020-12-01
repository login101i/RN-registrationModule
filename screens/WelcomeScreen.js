import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

import AppButton from '../components/AppButton'

export default function WelcomeScreen(props) {

    const onNavigateLogin = () => {
        props.navigation.navigate("Login")
    }
    const onNavigateRegister = () => {
        props.navigation.navigate("Register")
    }
    return (
        <ImageBackground
            style={styles.bg}
            source={require('../assets/mountains.jpg')}>
            <View>


                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={require("../assets/logo.jpg")}
                />
                <View style={{ padding: 20,  }}>
                    <AppButton
                        title="logowanie"
                        color="littleDark"
                        textColor="white"
                        onPress={() => {
                            onNavigateLogin()
                        }}
                    />

                    <AppButton
                        title="Rejestracja"
                        color="littleDark"
                        textColor="white"
                        onPress={()=>{onNavigateRegister()}}

                    />
                </View>
            </View>

        </ImageBackground>
    )
}


WelcomeScreen.navigationOptions = navData => {
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
    bg: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    logo: {
        width: 300,
        height: 300,
        borderRadius:150,

        alignSelf: 'center',
        marginTop: 50
    }
})
