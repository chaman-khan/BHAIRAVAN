import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import AddOwner from '../screens/addOwner';
import AddPicture from '../screens/addPicture';
import DogAge from '../screens/dogAge';
import DogBreed from '../screens/dogBreed';
import Preference from '../screens/preference';
import Registration from '../screens/auth/registration';
import Verify_Screen from '../screens/auth/verify';
import Drawere from './drawer';
import DogGender from '../screens/dogGender';
function MainNav() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Verify_Screen" component={Verify_Screen} />
        <Stack.Screen name="Drawer" component={Drawere} />
        <Stack.Screen name="AddOwner" component={AddOwner} />
        <Stack.Screen name="AddPicture" component={AddPicture} />
        <Stack.Screen name="DogAge" component={DogAge} />
        <Stack.Screen name="DogGender" component={DogGender} />
        <Stack.Screen name="DogBreed" component={DogBreed} />
        <Stack.Screen name="Preference" component={Preference} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
