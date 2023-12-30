import React from 'react'
import { Image, View } from 'react-native'

const Splash = () => {
    return(
        <View>
            <Image source={require('../assets/images/splashTop.png')} />
            <Image source={require('../assets/images/logo.png')} />
            <Image source={require('../assets/images/splashBottom.png')} />
        </View>
    )
}

export default Splash