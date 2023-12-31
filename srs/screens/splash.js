import React, {useEffect} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
const {height} = Dimensions.get('screen');

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Registration');
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [navigation]);
  return (
    <View style={{height: height}}>
      <Image
        source={require('../assets/images/splashTop.png')}
        style={{alignSelf: 'flex-end', height: height / 2.8}}
      />
      <View style={styles.style}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{width: '90%', height: '90%'}}
        />
      </View>
      <Image
        source={require('../assets/images/splashBottom.png')}
        style={{height: height / 2.8, marginTop: -60}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  style: {
    height: height / 2.5,
    width: height / 2.5,
    alignSelf: 'center',
    backgroundColor: '#ECAC50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    marginTop: -80,
  },
});

export default Splash;
