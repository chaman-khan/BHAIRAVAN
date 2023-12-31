import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import BottomTab from './bottomTab';
import Drawer1 from './drawer';
import AddOwner from '../screens/addOwner';
import AddPicture from '../screens/addPicture';
import DogAge from '../screens/dogAge';
import DogBreed from '../screens/dogBreed';
import Preference from '../screens/preference';
import ProfileSetting from '../screens/profileSetting';
import Setting from '../screens/setting';
import Chats from '../screens/chats';
import ChatDetail from '../screens/chatDetail';
import Matches from '../screens/matches';
import Favourites from '../screens/favourites';
import Registration from '../screens/auth/registration';
import Verify_Screen from '../screens/auth/verify';
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
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Drawer" component={Drawer1} />
        <Stack.Screen name="AddOwner" component={AddOwner} />
        <Stack.Screen name="AddPicture" component={AddPicture} />
        <Stack.Screen name="DogAge" component={DogAge} />
        <Stack.Screen name="DogBreed" component={DogBreed} />
        <Stack.Screen name="Preference" component={Preference} />
        <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="ChatDetail" component={ChatDetail} />
        <Stack.Screen name="Matches" component={Matches} />
        <Stack.Screen name="Favourites" component={Favourites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
