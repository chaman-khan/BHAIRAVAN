import React from 'react';
import {Dimensions, Image, ScrollView, View} from 'react-native';
const {height} = Dimensions.get('screen');

const Splash = () => {
  return (
    <View style={{height: height}}>
        <Image
          source={require('../assets/images/splashTop.png')}
          style={{alignSelf: 'flex-end', height: height / 2.8}}
        />
        <View
          style={{
            height: height / 2.5,
            width: height /2.5,
            alignSelf: 'center',
            backgroundColor: '#ECAC50',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 500,
            marginTop: -80
          }}>
          <Image source={require('../assets/images/logo.png')} style={{width: '90%', height: '90%'}} />
        </View>
        <Image
          source={require('../assets/images/splashBottom.png')}
          style={{height: height / 2.8, marginTop: -60}}
        />
      </View>
  );
};

export default Splash;
