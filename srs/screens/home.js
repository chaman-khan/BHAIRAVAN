import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../assets/constants/theme';
const Home = ({navigation}) => {
  const [showSetting, setShowSetting] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);

  const Row = ({image, text}) => (
    <View style={styles.row}>
      <View style={{flexDirection: 'row'}}>
        <Image style={{height: 33, width: 38}} source={image} />
        <Text style={styles.itemTxt}>{text}</Text>
      </View>
      <Image source={require('../assets/images/arrowRight.png')} />
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.openDrawer()}>
          <Image source={require('../assets/images/drawerIcon.png')} />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => setShowSetting(!showSetting)}
            style={styles.profilebtn}>
            <Image
              source={require('../assets/images/blackFoot.png')}
              style={{width: 28, height: 28}}
            />
          </TouchableOpacity>
          <Text style={styles.profileTxt}>Profile</Text>
        </View>
      </View>
      {showSetting && (
        <View style={styles.modal}>
          <Image
            source={require('../assets/images/drop.png')}
            style={{alignSelf: 'flex-end', marginRight: 10}}
          />
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                setShowSetting(false);
                navigation.navigate('ProfileSetting');
              }}>
              <Image source={require('../assets/images/profile.png')} />
              <Text style={styles.txt}>Profile Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => setShowSetting(false)}>
              <Image source={require('../assets/images/logout1.png')} />
              <Text style={styles.txt}>Log Out</Text>
            </TouchableOpacity>
          </View>
          {showLogOut && (
            <View style={styles.btns1}>
              <Text style={styles.logoutTxt}>Log Out?</Text>
              <Text style={styles.smallTxt}>Are you sure want to log out?</Text>
              <View style={styles.mdlbtns}>
                <TouchableOpacity
                  style={styles.modelbtn}
                  activeOpacity={1}
                  onPress={() => setShowSetting(false)}>
                  <Text style={{color: '#3A2A28', fontWeight: '600'}}>
                    cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modelbtn}
                  activeOpacity={1}
                  onPress={() => setShowSetting(false)}>
                  <Text style={{color: '#3A2A28', fontWeight: '600'}}>
                    log out
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      )}
      <ScrollView>
        <View style={styles.main}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{width: 230, height: 230}}
          />
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('Favourites')}>
          <Row image={require('../assets/images/heart.png')} text={'Likes'} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('Matches')}>
          <Row
            image={require('../assets/images/matches.png')}
            text={'Matches'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('Chatstack')}>
          <Row image={require('../assets/images/chat.png')} text={'Chats'} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.yellow200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  touch: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingLeft: 30,
  },
  txt: {
    color: '#3A2A28',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Unbounded',
  },
  btns: {
    width: '100%',
    height: 214,
    borderColor: '#3A2A28',
    borderWidth: 4,
    borderRadius: 12,
    marginTop: -5,
    backgroundColor: '#F7DC9C',
  },
  modal: {
    width: '70%',
    position: 'absolute',
    right: 20,
    zIndex: 2,
    borderRadius: 12,
    marginTop: 111,
  },
  main: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: theme.colors.yellow900,
    shadowColor: theme.colors.brown900,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  profilebtn: {
    backgroundColor: '#ECAC50',
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
  },
  profileTxt: {
    color: '#3A2A28',
    fontSize: 12,
    fontFamily: 'Unbounded',
    alignSelf: 'center',
  },
  row: {
    marginVertical: 10,
    backgroundColor: 'transparent',
    borderTopColor: theme.colors.brown900,
    borderBottomColor: theme.colors.brown900,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingVertical: 30,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTxt: {
    fontSize: 22,
    fontFamily: 'Unbounded',
    fontWeight: '500',
    paddingLeft: 10,
  },

  header: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    height: 111,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBlockColor: '#000',
    borderBottomWidth: 2,
    paddingHorizontal: 20,
  },
  btns1: {
    width: '100%',
    height: 214,
    borderColor: '#3A2A28',
    borderWidth: 4,
    borderRadius: 12,
    marginTop: -5,
    backgroundColor: '#F7DC9C',
    justifyContent: 'space-evenly',
    position: 'absolute',
    zIndex: 5,
  },
  modelbtn: {
    width: '48%',
    height: 58,
    backgroundColor: '#ECAC50',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mdlbtns: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoutTxt: {
    color: '#3A2A28',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Unbounded',
    textAlign: 'center',
  },
  smallTxt: {
    color: 'rgba(58, 42, 40, 0.79)',
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Unbounded',
    textAlign: 'center',
  },
});

export default Home;
