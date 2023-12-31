import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Setting from '../screens/setting';
import LogOut from '../screens/logOUt';
import Notification from '../screens/notofication';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#3A2A28',
        tabBarInactiveTintColor: '#3A2A28',
        inactiveTintColor: '#3A2A28',
        tabBarStyle: {
          backgroundColor: '#ECAC50',
          position: 'relative',
          borderTopWidth: 0,
          height: 80,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600',
          fontFamily: 'Poppins',
        },
        tabBarItemStyle: {
          paddingVertical: 2,
          paddingHorizontal: 10,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let Screen_name = route.name;
          if (Screen_name === 'Home') {
            iconName = require('../assets/images/home.png');
          } else if (Screen_name === 'Notification') {
            iconName = require('../assets/images/notification.png');
          } else if (Screen_name === 'Setting') {
            iconName = require('../assets/images/setting.png');
          } else if (Screen_name === 'LogOut') {
            iconName = require('../assets/images/logout.png');
          }
          return (
            <Image
              source={iconName}
              size={size}
              tintColor={color}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
            // <Ionicons
            //   name={iconName}
            //   size={size}
            //   color={color}
            //   style={{height: 30, width: 30}}
            // />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="LogOut"
        component={LogOut}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
