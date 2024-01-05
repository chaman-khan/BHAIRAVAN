import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad, loginSuccess, verifyAccount} from '../../redux/actions/auth';
import { Loading } from '../../components/loading';

const Verify_Screen = ({navigation, route}) => {
  const {Number} = route.params;
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();
  const codeInputRef = useRef(null);
  const [otp, setOtp] = useState();

  const {authLoading} = useSelector(state => state.auth);

  const handleVerifyCode = () => {
    if (otp && otp.length === 4) {
      dispatch(authLoad(true));

      var raw = JSON.stringify({
        phone: Number,
        otp: otp,
      });

      console.log('raw...........');
      console.log(raw);
      console.log('raw.........kfu');
      dispatch(verifyAccount(raw, onSuccess, onError));
    } else {
      console.log('====================================');
      console.log(otp);
      console.log('====================================');
      Alert.alert('Incorrect', 'Please enter a 4-digit verification code.');
    }
  };

  const onSuccess = val => {
    dispatch(authLoad(false));
    console.log('val....................................................');
    console.log(val);
    console.log('val....................................................');
    Alert.alert(
      val.status === true ? 'Success' : 'Error',
      val.status === true
        ? val.message
        : val.message || val.message.message,
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed');
            dispatch(loginSuccess(val));
            val.status === true && navigation.replace('AddOwner', {item: val});
          },
        },
      ],
      {cancelable: false},
    );
  };
  const onError = err => {
    console.log(err);
    dispatch(authLoad(false));
    console.log(err);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{backgroundColor: '#F7DC9C'}}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 100,
        }}>
        <Image
          style={{
            alignSelf: 'flex-start',
            position: 'absolute',
            marginTop: 40,
            // height: 113,
            // width: 140,
          }}
          source={require('../../assets/images/footPrint.png')}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: '#3A2A28',
            fontFamily: 'Unbounded',
            marginVertical: 10,
          }}>
          VERIFICATION CODE
        </Text>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text
            style={{
              width: '70%',
              fontSize: 12,
              color: '#3A2A28',
              fontWeight: '400',
              fontFamily: 'Unbounded',
              paddingHorizontal: 20,
              alignSelf: 'flex-start',
            }}>
            A verification code has been sent to your phone number.
          </Text>
        </View>
        <View style={{height: 50}}></View>
        <CodeInput
          ref={codeInputRef}
          // secureTextEntry
          activeColor={'#3A2A28'}
          inactiveColor={'#937E5F'}
          autoFocus={true}
          keyboardType="numeric"
          codeLength={4}
          className="border-circle"
          size={45}
          disableFullscreenUI={true}
          onFulfill={setOtp} onContentSizeChange={setOtp}
          containerStyle={{marginVertical: 56}}
          codeInputStyle={{
            borderWidth: 1,
            borderColor: '#3A2A28',
            fontSize: 24,
            borderRadius: 6,
            width: '20%',
            height: 56,
            fontFamily: 'Unbounded',
          }}
        />

        {/* <Link href={{ pathname: "AddOwner" }} asChild> */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={handleVerifyCode}
          style={styles.btn}>
          <Text
            style={{color: '#3A2A28', fontFamily: 'Unbounded', fontSize: 16}}>
            Confirm
          </Text>
        </TouchableOpacity>
        {/* </Link> */}

        <View
          style={{
            flexDirection: 'row',
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#3A2A28',
              fontFamily: 'Unbounded',
            }}>
            Didn’t receive the code?
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '800',
              color: '#3A2A28',
              fontFamily: 'Unbounded',
            }}>
            Resend
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#3A2A28',
              fontFamily: 'Unbounded',
            }}>
            {' '}
            (45s)
          </Text>
        </View>
      </ScrollView>
      <Image
        style={{
          alignSelf: 'center',
          position: 'absolute',
          top: 650,
          width: '50%',
          height: 160,
        }}
        source={require('../../assets/images/footPrint.png')}
      />
      <Loading visible={authLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '85%',
    height: 61,
    alignSelf: 'center',
    backgroundColor: '#ECAC50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 106,
  },
});
export default Verify_Screen;
