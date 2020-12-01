import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import expoPushTokensApi from '../api/expoPushTokens'
import navigation from '../navigation/rootNavigation'


export default function RequestForNotifications(notificationListener) {
    useEffect(() => {

        registerForPushNotifications()
      if(notificationListener)  Notifications.addListener(notificationListener)

    }, [])

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (!permission.granted) return

            const token = await Notifications.getExpoPushTokenAsync()
            console.log("rejestracja Tokena")
            expoPushTokensApi.register(token)

        } catch (error) {
            console.log("error pushing token")
        }
    }
    return (
        <View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({})
