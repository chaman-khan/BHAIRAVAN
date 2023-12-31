import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
 
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#20B7FE',
        inactiveTintColor: 'gray', // Set your desired inactive color
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'relative',
          borderTopWidth: 0,
          height: 50,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          fontFamily: 'Poppins',
        },
        tabBarItemStyle: {
          paddingVertical: 2,
          paddingHorizontal: 20,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let Screen_name = route.name;
          if (Screen_name === 'Home') {
            iconName = require('../assets/images/home.png');
          } else if (Screen_name === 'Notification') {
            iconName = require('../assets/images/notification.png');
          } else if (Screen_name === 'CreateRequest') {
            iconName = require('../assets/images/setting.png');
          } else if (Screen_name === 'Setting') {
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

      {/* <Tab.Screen
        name="CreateRequest"
        component={CreateRequest}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Donor_Notification}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Donor_Setting}
        options={{
          headerShown: false,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;
