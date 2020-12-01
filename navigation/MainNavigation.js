import React from 'react'
import { Platform, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'





import UsersItemsScreen from '../screens/UserItemsScreen'
import UserAccountScreen from '../screens/AccountScreen'
import Colors from '../config/colors'
import RequestForNotifications from '../hooks/RequestForNotifications'




// RequestForNotifications() 
// cg Nie wiem jak zrobić z tego kompent funkcyjny

const defaultOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',

    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : 'purple'
}

// ___________________________________________________________

const tabScreenConfig = {
    UserItem: {
        screen: UsersItemsScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                    name="ios-restaurant"
                    // color='white'
                    color={tabInfo.tintColor}
                    size={25}
                />

            },
            tabBarColor: "orange",
            tabBarLabel: Platform.OS === 'android' ? (<Text style={{ color: 'white' }}>Potrawy</Text>) : ''
        }

    },
    UserAccount: {
        screen: UserAccountScreen,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                    name="ios-star"
                    // color='white'
                    color={tabInfo.tintColor}
                    size={25}
                />

            },
            tabBarColor: "purple"

        }
    }
}

const LeftBottomNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    activeTintColor: 'blue',
    shifting: true,
    barStyle: {
        backgroundColor: Colors.green
    }
})

// _________________________________________________

// ________________________________________


// _________________________________




export default createAppContainer(LeftBottomNavigator)