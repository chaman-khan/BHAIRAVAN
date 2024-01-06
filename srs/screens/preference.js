import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import {theme} from '../assets/constants/theme';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad} from '../redux/actions/auth';
import {Loading} from '../components/loading';
import { addPreference } from '../redux/actions/home';

const {height} = Dimensions.get('screen');

const Preference = ({navigation}) => {
  const [play, setPlay] = useState(false);
  const [adopt, setAdopt] = useState(false);
  const [mate, setMate] = useState(false);
  const [missing, setMissin] = useState(false);
  const dispatch = useDispatch();
  const {authLoading, loginData} = useSelector(state => state.auth);
  const handlePreference = () => {
    if (play || adopt || mate || missing) {
      dispatch(authLoad(true));

      var raw = JSON.stringify({
        preference: play ? 'play' : adopt ? 'adopt' : mate ? 'mate' : 'missing',
      });
      console.log('raw');
      console.log(raw);
      console.log(loginData);
      console.log('..................................................');
      dispatch(addPreference(loginData, raw, onSuccess, onError));
    } else {
      Alert.alert('Alert', 'Select Preference');
    }
  };

  const onSuccess = val => {
    dispatch(authLoad(false));

    console.log('====================================');
    console.log(val);
    console.log('====================================');
    Alert.alert(
      val.status === true ? 'Success' : 'Error',
      val.status === true ? val.message : val.message || val.message.message,
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed');
            val.status === true && navigation.navigate('Drawer');
          },
        },
      ],
      {cancelable: false},
    );
  };
  const onError = err => {
    dispatch(authLoad(false));
    console.log(err);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/topTop.png')}
            style={{position: 'absolute', left: 0}}
          />
          <TouchableOpacity
            activeOpacity={1}
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backTxt}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.mainTxt}>Preference</Text>
          <View style={styles.line}>
            <TouchableOpacity
              style={{
                ...styles.view,
                backgroundColor: play ? '#ECAC50' : 'transparent',
              }}
              activeOpacity={1}
              onPress={() => {
                setPlay(!play);
                setMate(false);
                setAdopt(false);
                setMissin(false);
              }}>
              <Image
                source={require('../assets/images/play.png')}
                style={{width: '100%', height: '100%'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.view,
                backgroundColor: mate ? '#ECAC50' : 'transparent',
              }}
              activeOpacity={1}
              onPress={() => {
                setPlay(false);
                setMate(!mate);
                setAdopt(false);
                setMissin(false);
              }}>
              <Image
                source={require('../assets/images/mate.png')}
                style={{width: '90%', height: '90%'}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line}>
            <TouchableOpacity
              style={{
                ...styles.view,
                backgroundColor: missing ? '#ECAC50' : 'transparent',
              }}
              activeOpacity={1}
              onPress={() => {
                setPlay(false);
                setMate(false);
                setAdopt(false);
                setMissin(!missing);
              }}>
              <Image
                source={require('../assets/images/missing.png')}
                style={{width: '100%', height: '100%'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.view,
                backgroundColor: adopt ? '#ECAC50' : 'transparent',
              }}
              activeOpacity={1}
              onPress={() => {
                setPlay(false);
                setMate(false);
                setAdopt(!adopt);
                setMissin(false);
              }}>
              <Image
                source={require('../assets/images/adopt.png')}
                style={{width: '90%', height: '90%'}}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require('../assets/images/nextTop.png')}
            style={{marginTop: 50}}
          />
          <TouchableOpacity
            onPress={handlePreference}
            style={{...styles.btn, marginBottom: 20}}>
            <Text
              style={{color: '#3A2A28', fontFamily: 'Unbounded', fontSize: 16}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Loading visible={authLoading} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: theme.colors.yellow200,
    flex: 1,
    alignItems: 'center',
    height: height,
  },
  back: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  backTxt: {
    color: '#3A2A28',
    fontSize: 15,
    fontFamily: 'Unbounded',
    alignSelf: 'flex-end',
  },
  mainTxt: {
    color: '#3A2A28',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Unbounded',
    marginVertical: 40,
  },
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  btn: {
    width: '70%',
    height: 61,
    alignSelf: 'center',
    backgroundColor: '#ECAC50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 106,
  },
});

export default Preference;
