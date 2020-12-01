import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppButton from '../components/AppButton'
import AuthContext from '../auth/context'
import AuthStorage from '../auth/storage'

export default function WelcomeScreen() {

    const authContext = useContext(AuthContext)
    const handleLogOut = () => {
        authContext.setUserLogged(null)
    }

    const userName = authContext.userLogged.name
    const userEmail = authContext.userLogged.email
    return (
        <View style={styles.container}>
            <Text>Hello from AccountScreen</Text>
            <Text>{userName}</Text>
            <Text>{userEmail}</Text>
            <AppButton
                title="wyloguj"
                color={'littleDark'}
                textColor="white"
                onPress={() => {
                    handleLogOut()
                    AuthStorage.removeToken()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 11
    }
})
