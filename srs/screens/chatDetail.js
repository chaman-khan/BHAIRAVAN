import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const ChatDetail = ({navigation, route}) => {
  const {item} = route.params;

  const ProfileImage = () => {
    return (
      <View style={styles.profilebtn}>
        <Image
          source={require('../assets/images/blackFoot.png')}
          style={{width: 28, height: 28}}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F7DC9C'}}>
      <View style={styles.topBar}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
          <Text style={styles.backbtn}>Back</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          <Image source={item.image} />
          <View style={{gap: 8}}>
            <Text style={{color: '#3A2A28', fontSize: 20}}>{item.name}</Text>
            <Text style={{color: '#009CBB'}}>online</Text>
          </View>
        </View>
      </View>
      <View style={{width: '80%', alignSelf: 'center'}}>
        <View>
          <ProfileImage />
          <View style={styles.send}>
            <Text style={{color: '#000000', fontWeight: '500'}}>
              Hi, {item.name}{' '}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 100, width: '80%', alignSelf: 'flex-end'}}>
          <Image
            source={item.image}
            style={{alignSelf: 'flex-end', width: 48, height: 47, zIndex: 2}}
          />
          <View style={styles.send1}>
            <Text style={{color: '#000000', fontWeight: '500'}}>Hello </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 125,
          borderColor: '#3A2A28',
          borderTopWidth: 1,
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 71,
            alignSelf: 'center',
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 27,
            backgroundColor: 'rgba(58, 42, 40, 0.18)',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Image source={require('../assets/images/emoji.png')} />
          <TextInput placeholder="Type a message" style={{width: '50%'}} />
          <Image source={require('../assets/images/attach.png')} />
          <Image source={require('../assets/images/voice.png')} />
          <Image source={require('../assets/images/send.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    height: 144,
    padding: 20,
    borderColor: '#3A2A28',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  backbtn: {
    color: '#3A2A28',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'right',
  },
  profilebtn: {
    width: 47,
    height: 46,
    backgroundColor: '#ECAC50',
    borderRadius: 25,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  send: {
    width: '50%',
    height: 52,
    borderRadius: 22,
    justifyContent: 'center',
    paddingLeft: 30,
    backgroundColor: 'rgba(58, 42, 40, 0.18)',
    position: 'absolute',
    marginTop: 30,
    marginLeft: 8,
  },
  send1: {
    width: '80%',
    height: 52,
    borderRadius: 22,
    justifyContent: 'center',
    paddingLeft: 30,
    backgroundColor: 'rgba(58, 42, 40, 0.18)',
    position: 'absolute',
    marginTop: 30,
    marginLeft: 31,
  },
});

export default ChatDetail;
