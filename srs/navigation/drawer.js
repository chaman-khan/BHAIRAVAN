import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './bottomTab';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../assets/constants/theme';
import Home from '../screens/home';
import ProfileSetting from '../screens/profileSetting';
import Setting from '../screens/setting';
import Chats from '../screens/chats';
import ChatDetail from '../screens/chatDetail';
import Matches from '../screens/matches';
import Favourites from '../screens/favourites';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chatstack from './chatStack';
import Registration from '../screens/auth/registration';

const Drawer = createDrawerNavigator();

export default function Drawere({navigation}) {
  const Stack = createNativeStackNavigator();

  const DrawerMenu = ({navigation}) => {
    return (
      <View style={{backgroundColor: theme.colors.yellow200, flex: 1}}>
        <View style={styles.drawerHeader}>
          <View
            style={{backgroundColor: '#ECAC50', borderRadius: 30, padding: 10}}>
            <Image
              source={require('../assets/images/blackFoot.png')}
              style={{width: 35, height: 35}}
            />
          </View>
          <Text
            style={{
              color: '#ECAC50',
              fontSize: 24,
              fontWeight: '600',
              fontFamily: 'Unbounded',
            }}>
            Bhairavan
          </Text>
        </View>
        <View style={styles.line}>
          <TouchableOpacity style={styles.view} activeOpacity={1}>
            <Image source={require('../assets/images/play.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.view} activeOpacity={1}>
            <Image source={require('../assets/images/mate.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          <TouchableOpacity style={styles.view} activeOpacity={1}>
            <Image source={require('../assets/images/missing.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.view} activeOpacity={1}>
            <Image source={require('../assets/images/adopt.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.closeDrawer()}
          style={styles.btn}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          // drawerStyle: {
          //   width: '80%',
          // },
          // headerTintColor: '#3A2A28',
          // headerStyle: {
          //   backgroundColor: theme.colors.yellow200,
          //   height: 100,
          //   borderBottomColor: '#3A2A28',
          //   borderBottomWidth: 2,
          // },
          // headerRight: () => (
          //   <View
          //     style={{
          //       marginRight: 20,
          //     }}>
          //     <TouchableOpacity onPress={() => setShowSetting(!showSetting)}
          //       style={{
          //         backgroundColor: '#ECAC50',
          //         borderRadius: 30,
          //         padding: 10,
          //         borderWidth: 1,
          //       }}>
          //       <Image
          //         source={require('../assets/images/blackFoot.png')}
          //         style={{width: 28, height: 28}}
          //       />
          //     </TouchableOpacity>
          //     <Text
          //       style={{
          //         color: '#3A2A28',
          //         fontSize: 12,
          //         fontFamily: 'Unbounded',
          //         alignSelf: 'center',
          //       }}>
          //       Profile
          //     </Text>
          //   </View>
          // ),
          headerShown: false,
        }}
        drawerContent={({navigation}) => <DrawerMenu navigation={navigation} />}
        initialRouteName="HomeTab">
        <Drawer.Screen
          options={{
            title: ' ',
          }}
          name="HomeTab"
          component={BottomTab}
        />
        <Drawer.Screen name="ProfileSetting" component={ProfileSetting} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Chatstack" component={Chatstack} />

        <Drawer.Screen name="Matches" component={Matches} />
        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen name='Registration' component={Registration} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '45%',
    height: 162,
    borderColor: '#3A2A28',
    borderWidth: 1,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  drawerHeader: {
    height: 200,
    backgroundColor: '#3A2A28',
    borderColor: '#F5D591',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  btn: {
    width: '70%',
    height: 61,
    alignSelf: 'center',
    backgroundColor: '#ECAC50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 106,
    marginTop: 30,
  },
});
