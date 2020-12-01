import React from 'react'
import LottieView from 'lottie-react-native'
import { StyleSheet, View } from 'react-native'

function ActivityIndicator({ visible = false }) {

    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <LottieView
                source={require('../assets/animation/loader.json')}
                autoPlay
                loop

            />
        </View>

    )
}

const styles = StyleSheet.create({
    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        opacity: 0.7,
        backgroundColor: 'white'
    }
})

export default ActivityIndicator

