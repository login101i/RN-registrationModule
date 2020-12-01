import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import AppNavigator from './navigation/AppNavigation'
import MainNavigator from './navigation/MainNavigation'
import Screen from './screens/Screen'
import AuthContext from './auth/context'
import AuthStorage from './auth/storage'
import jwtDecode from 'jwt-decode'
import { AppLoading } from 'expo'

export default function App() {

  const [userLogged, setUserLogged] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await AuthStorage.getUser()
    if (!user) return
    setUserLogged(user)
  }






  let navToDisplay = <AppNavigator />
  if (userLogged) {
    navToDisplay = <MainNavigator />
  } else {
    navToDisplay = <AppNavigator />
  }

  if (!isReady) return <AppLoading
    startAsync={restoreUser}
    onFinish={() => setIsReady(true)}
  />


  return (
    <AuthContext.Provider value={{ userLogged, setUserLogged }}>
      <Screen>

        {navToDisplay}

      </Screen>
    </AuthContext.Provider >

  );
}

const styles = StyleSheet.create({

});
