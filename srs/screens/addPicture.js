import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RootStackScreenProps} from '../common/types';
import {theme} from '../assets/constants/theme';
import ImagePicker from 'react-native-image-crop-picker';

const AddPicture = ({navigation}) => {
  const [source, setSource] = useState(null);
  const [source1, setSource1] = useState(null);
  const gallery = () => {
    ImagePicker.openPicker({}).then(images => {
      console.log(images);
      setSource(images.path);
    });
  };
  const gallery1 = () => {
    ImagePicker.openPicker({}).then(images => {
      console.log(images);
      setSource1(images.path);
    });
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity activeOpacity={1} style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={styles.backTxt}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.main}>Add Picture</Text>

        <View style={{width: '40%'}}>
          <Text style={styles.txt}>1. Owner and Dog</Text>
        </View>

        <TouchableOpacity
          style={styles.camera}
          onPress={gallery}>
          {source == null ? (
            <Image source={require('../assets/images/camera.png')} />
          ) : (
            <Image
              source={{uri: source}}
              style={{width: '100%', height: '100%', borderRadius: 15}}
            />
          )}
        </TouchableOpacity>

        <View style={{width: '40%'}}>
          <Text style={styles.txt}>2. Only Dog</Text>
        </View>

        <TouchableOpacity
          style={styles.camera}
          onPress={gallery1}>
          {source1 == null ? (
            <Image source={require('../assets/images/camera.png')} />
          ) : (
            <Image
              source={{uri: source1}}
              style={{width: '100%', height: '100%', borderRadius: 15}}
            />
          )}
        </TouchableOpacity>

        <View style={{height: 20, marginTop: 40}}></View>

        <TouchableOpacity
          onPress={() => navigation.navigate('DogGender')}
          style={styles.btn}>
          <Text
            style={{color: '#3A2A28', fontFamily: 'Unbounded', fontSize: 16}}>
            Next
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.yellow200,
    flex: 1,
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
  txt: {
    fontFamily: 'Unbounded',
    fontSize: 16,
    color: theme.colors.brown900,
    fontWeight: '700',
    marginTop: 25,
    textAlign: 'left',
  },
  camera: {
    width: '40%',
    height: 150,
    backgroundColor: theme.colors.brown900,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 15,
  },
  main: {
    fontFamily: 'Unbounded',
    fontSize: 26,
    color: theme.colors.brown900,
    fontWeight: '700',
    marginVertical: 50,
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
});

export default AddPicture;
