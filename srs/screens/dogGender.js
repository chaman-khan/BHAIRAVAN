import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theme} from '../assets/constants/theme';
import {authLoad} from '../redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {addgender} from '../redux/actions/home';
import {Loading} from '../components/loading';

const {height} = Dimensions.get('screen');

const DogGender = ({navigation}) => {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const dispatch = useDispatch();
  const {authLoading, loginData} = useSelector(state => state.auth);

  const handleGender = () => {
    if (!male && !female) {
      Alert.alert('Alert', 'Select Dogs Gender');
    } else {
      dispatch(authLoad(true));

      var raw = JSON.stringify({
        gender: male ? 'male' : 'female',
      });
      console.log('raw');
      console.log(raw);
      console.log(loginData);
      console.log('..................................................');
      dispatch(addgender(loginData, raw, onSuccess, onError));
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
            val.status === true && navigation.navigate('DogBreed');
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
          <TouchableOpacity
            activeOpacity={1}
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backTxt}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.mainTxt}>What is the dog's gender?</Text>

          <Text style={styles.txt}>Select dog's gender</Text>

          <View style={styles.imgs}>
            <Image
              source={require('../assets/images/leftLogo.png')}
              style={{width: '30%', position: 'absolute', left: 0}}
            />
            <Image
              source={require('../assets/images/regLogo.png')}
              style={{marginLeft: 20}}
            />
            <Image
              source={require('../assets/images/rightLogo.png')}
              style={{width: '30%', position: 'absolute', right: 0}}
            />
          </View>
          {/* <Image
          style={{marginTop: 10, height: 130, width: 220}}
          source={require('../res/images/pngs/footprint_group.png')}
        /> */}

          <View style={{flexDirection: 'row', margin: 60}}>
            <View style={{flexDirection: 'row', margin: 30}}>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  ...styles.select,
                  backgroundColor: male ? '#ECAC50' : '#F7DC9C',
                }}
                onPress={() => {
                  setMale(!male);
                  setFemale(false);
                }}>
                <Image source={require('../assets/images/male.png')} />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={1}
                style={{
                  ...styles.select,
                  backgroundColor: female ? '#ECAC50' : '#F7DC9C',
                }}
                onPress={() => {
                  setMale(false);
                  setFemale(!female);
                }}>
                <Image source={require('../assets/images/female.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleGender}
            style={{...styles.btn, marginBottom: 20}}>
            <Text
              style={{color: '#3A2A28', fontFamily: 'Unbounded', fontSize: 16}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <Loading visible={authLoading} />
      </ScrollView>
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
  btn: {
    width: '85%',
    height: 61,
    alignSelf: 'center',
    backgroundColor: '#ECAC50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 106,
  },
  select: {
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 15,
    marginHorizontal: 10,
    borderWidth: 2,
  },
  back: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: '500',
  },
  backTxt: {
    color: '#3A2A28',
    fontSize: 15,
    fontFamily: 'Unbounded',
    alignSelf: 'flex-end',
  },
  mainTxt: {
    fontFamily: 'Unbounded',
    fontSize: 20,
    color: theme.colors.brown900,
    fontWeight: '700',
    marginTop: 100,
    marginRight: 0,
  },
  imgs: {
    flexDirection: 'row',
    height: 175,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  txt: {
    fontFamily: 'Unbounded',
    fontSize: 13,
    color: theme.colors.brown900,
    fontWeight: '600',
    marginTop: 13,
  },
});

export default DogGender;
