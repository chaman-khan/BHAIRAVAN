import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';

import {theme} from '../assets/constants/theme';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad} from '../redux/actions/auth';
import {addOwner} from '../redux/actions/home';
import { Loading } from '../components/loading';

const {height} = Dimensions.get('screen');
const AddOwner = ({navigation}) => {
  const [owner, setOwner] = useState('');
  const [dog, setDog] = useState('');

  const dispatch = useDispatch();
  const {authLoading, loginData} = useSelector(state => state.auth);

  const handleAdd = () => {
    if (!dog || !owner) {
      Alert.alert('Alert', 'Write both Names');
    } else {
      dispatch(authLoad(true));

      var raw = JSON.stringify({
        owner_name: owner,
        dog_name: dog,
      });
      console.log('raw');
      console.log(raw);
      console.log(loginData);
      console.log('..................................................');
      dispatch(addOwner(loginData, raw, onSuccess, onError));
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
            val.status === true && navigation.navigate('AddPicture');
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
            style={{
              width: '90%',
              alignSelf: 'center',
              marginBottom: 40,
              marginTop: 20,
            }}
            onPress={() => navigation.goBack()}>
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
          <View style={{width: '100%', alignSelf: 'center'}}>
            <Image
              style={{
                width: 100,
                height: 100,
                alignSelf: 'center',
              }}
              source={require('../assets/images/footPrint.png')}
            />
          </View>

          <Text
            style={{
              fontFamily: 'Unbounded',
              fontSize: 18,
              color: theme.colors.brown900,
              fontWeight: '600',
              marginTop: 50,
            }}>
            Dog Owner Name?
          </Text>

          <View
            style={{
              borderBottomColor: theme.colors.brown900,
              borderBottomWidth: 4,
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                fontFamily: 'Unbounded',
                width: 230,
                fontSize: 14,
                padding: 10,
                color: theme.colors.brown900,
                textAlign: 'center',
              }}
              value={owner}
              onChangeText={txt => setOwner(txt)}
            />
          </View>

          <Text
            style={{
              fontFamily: 'Unbounded',
              fontSize: 18,
              color: theme.colors.brown900,
              fontWeight: '600',
              marginTop: 50,
            }}>
            Whats is your dog's name?
          </Text>

          <View
            style={{
              borderBottomColor: theme.colors.brown900,
              borderBottomWidth: 4,
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                fontFamily: 'Unbounded',
                width: 230,
                fontSize: 14,
                padding: 10,
                color: theme.colors.brown900,
                textAlign: 'center',
              }}
              value={dog}
              onChangeText={txt => setDog(txt)}
            />
          </View>

          <View style={{height: 20}}></View>
          {/* <Link href={{ pathname: "AddPicture" }} asChild> */}
          <TouchableOpacity onPress={handleAdd} style={styles.btn}>
            <Text
              style={{color: '#3A2A28', fontFamily: 'Unbounded', fontSize: 16}}>
              Next
            </Text>
          </TouchableOpacity>
          {/* </Link> */}

          <View style={{height: 20}}></View>
          {/* <Link href={{ pathname: "Perference" }} asChild> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Preference')}
            style={{...styles.btn, marginBottom: 20}}>
            <Text
              style={{color: '#3A2A28', fontFamily: 'Unbounded', fontSize: 16}}>
              Don't have a dog?
            </Text>
          </TouchableOpacity>
          {/* </Link> */}
        </View>
      </ScrollView>
      <Image
        style={{
          width: 100,
          alignSelf: 'flex-end',
          position: 'absolute',
          top: 450,
        }}
        source={require('../assets/images/footPrint.png')}
      />
      <Loading visible={authLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.yellow200,
    flex: 1,
    height: height,
    alignItems: 'center',
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
  back: {
    color: '#3A2A28',
    fontSize: 15,
    fontFamily: 'Unbounded',
    alignSelf: 'flex-end',
  },
});

export default AddOwner;
