import React from 'react'

export const navigationRef = React.createRef()

// const navigationRef = React.createRef()
// const navigation = navigationRef.current
// navigation.navigate()

const navigate = (name, params) =>
    navigationRef.current?.navigate(name, params)


export default {
    navigate
}