import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppButton from '../components/AppButton'
import AuthContext from '../auth/context'

export default function WelcomeScreen() {

    const authContext = useContext(AuthContext)
    const handleLogOut = () => {
        authContext.setUserLogged(false)
    }
    return (
        <View style={styles.container}>
            <Text>Hello from AccountScreen</Text>
            <AppButton
                title="wyloguj"
                color={'littleDark'}
                textColor="white"
                onPress={() => handleLogOut()}
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
