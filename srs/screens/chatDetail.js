import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EmojiPicker from 'rn-emoji-keyboard';

const {width, height} = Dimensions.get('screen');

const ChatDetail = ({navigation, route}) => {
  const {item} = route.params;

  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    // Implement your logic to send the message
    console.log('Sending message:', message);
  };

  const toggleIsOPen = () => {
    setIsOpen(!isOpen);
    Keyboard.dismiss();
  };

  const onEmojiSelected = emoji => {
    setMessage(message + emoji.emoji);
  };

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

  const [bottomSheetHeight, setBottomSheetHeight] = useState(0);
  const bottomSheetRef = useRef(null);

  // Measure the height of the bottom sheet when it's opened
  const onBottomSheetLayout = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.measure((fx, fy, width, height) => {
        setBottomSheetHeight(height);
      });
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F7DC9C'}}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{flex: 1}}
        keyboardVerticalOffset={bottomSheetHeight}>
        <View style={styles.topBar}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.goBack()}>
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
        <ScrollView>
          <View style={{width: '80%', alignSelf: 'center', height: height}}>
            <View>
              <ProfileImage />
              <View style={styles.send}>
                <Text style={{color: '#000000', fontWeight: '500'}}>
                  Hi, {item.name}
                </Text>
              </View>
            </View>
            <View style={{marginTop: 100, width: '80%', alignSelf: 'flex-end'}}>
              <Image
                source={item.image}
                style={{
                  alignSelf: 'flex-end',
                  width: 48,
                  height: 47,
                  zIndex: 2,
                }}
              />
              <View style={styles.send1}>
                <Text style={{color: '#000000', fontWeight: '500'}}>
                  Hello{' '}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            height: 125,
            borderColor: '#3A2A28',
            borderTopWidth: 1,
            justifyContent: 'center',
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#F7DC9C',
            zIndex: 5,
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
            <TouchableOpacity onPress={toggleIsOPen}>
              <Image source={require('../assets/images/emoji.png')} />
            </TouchableOpacity>
            <TextInput
              placeholder="Type a message"
              style={{width: '50%'}}
              value={message}
              onChangeText={txt => setMessage(txt)}
              // keyboardType={isEmojiKeyboardVisible ? 'numeric' : 'default'}
            />
            {/* <Image source={require('../assets/images/attach.png')} />
            <Image source={require('../assets/images/voice.png')} /> */}
            <TouchableOpacity activeOpacity={1} onPress={handleSend}>
              <Image source={require('../assets/images/send.png')} />
            </TouchableOpacity>
          </View>
        </View>
        {isOpen && (
          <View style={{height: 100}}>
            <EmojiPicker
              ref={bottomSheetRef}
              onEmojiSelected={onEmojiSelected}
              open={isOpen}
              onClose={() => setIsOpen(false)}
              enableSearchBar
              onLayout={onBottomSheetLayout}
            />
          </View>
        )}
      </KeyboardAvoidingView>
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
