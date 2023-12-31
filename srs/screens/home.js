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
const Home = route => {
  const {showSetting} = route.params;
  // const [showSetting, setShowSetting] = useState(false);

  const Row = ({image, text}) => (
    <View
      style={{
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
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image style={{height: 33, width: 38}} source={image} />
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'Unbounded',
            fontWeight: '500',
            paddingLeft: 10,
          }}>
          {text}
        </Text>
      </View>
      <Image source={require('../assets/images/arrowRight.png')} />
    </View>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          marginRight: 20,
        }}>
        <TouchableOpacity
          onPress={() => setShowSetting(!showSetting)}
          style={{
            backgroundColor: '#ECAC50',
            borderRadius: 30,
            padding: 10,
            borderWidth: 1,
          }}>
          <Image
            source={require('../assets/images/blackFoot.png')}
            style={{width: 28, height: 28}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#3A2A28',
            fontSize: 12,
            fontFamily: 'Unbounded',
            alignSelf: 'center',
          }}>
          Profile
        </Text>
      </View>
      {showSetting && (
        <View style={styles.modal}>
          <Image
            source={require('../assets/images/drop.png')}
            style={{alignSelf: 'flex-end', marginRight: 10}}
          />
          <View style={styles.btns}>
            <TouchableOpacity style={styles.touch}>
              <Image source={require('../assets/images/profile.png')} />
              <Text style={styles.txt}>Profile Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
              <Image source={require('../assets/images/logout1.png')} />
              <Text style={styles.txt}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <ScrollView>
        <View style={styles.main}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{width: 230, height: 230}}
          />
        </View>
        <Row image={require('../assets/images/heart.png')} text={'Likes'} />
        <Row image={require('../assets/images/matches.png')} text={'Matches'} />
        <Row image={require('../assets/images/chat.png')} text={'Chats'} />
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
  },
  modal: {
    width: '70%',
    position: 'absolute',
    right: 50,
    zIndex: 2,
    backgroundColor: '#F7DC9C',
    borderRadius: 12,
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
});

export default Home;
