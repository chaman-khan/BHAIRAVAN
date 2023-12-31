import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import BottomTab from './bottomTab';
import Drawer1 from './drawer';
function MainNav() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Drawer" component={Drawer1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
