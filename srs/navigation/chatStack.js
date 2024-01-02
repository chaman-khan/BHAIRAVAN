import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chats from '../screens/chats';
import ChatDetail from '../screens/chatDetail';

function Chatstack({navigation}) {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Chats' screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Chats"
        component={Chats}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatDetail"
        component={ChatDetail}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
}

export default Chatstack;
