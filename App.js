import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import AppNavigator from './navigation/AppNavigation'
import MainNavigator from './navigation/MainNavigation'
import Screen from './screens/Screen'
import AuthContext from './auth/context'

export default function App() {

  const [userLogged, setUserLogged] = useState()



  let navToDisplay = <AppNavigator />
  if (userLogged) {
    navToDisplay = <MainNavigator />
  } else {
    navToDisplay = <AppNavigator />
  }


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
