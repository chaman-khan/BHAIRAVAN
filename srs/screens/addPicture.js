import React from 'react';
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

const AddPicture = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity activeOpacity={1} style={styles.back}>
          <Text style={styles.backTxt}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.main}>Add Picture</Text>

        <View style={{width: '40%'}}>
          <Text style={styles.textAlign}>1. Owner and Dog</Text>
        </View>

        <View style={styles.camera}>
          <Image
            source={require('../assets/images/camera.png')}
            tintColor={theme.colors.yellow900}
            style={{width: 30, height: 30}}
          />
        </View>

        <View style={{width: '40%'}}>
          <Text style={styles.txt}>2. Only Dog</Text>
        </View>

        <View style={styles.camera}>
          <Image
            source={require('../assets/images/camera.png')}
            tintColor={theme.colors.yellow900}
            style={{width: 30, height: 30}}
          />
          {/* <FontAwesome name={'camera'} color={'#999'} size={30} /> */}
        </View>

        <View style={{height: 20, marginTop: 40}}></View>

        <TouchableOpacity
          // onPress={() => navigation.navigate('AddGender')}
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
