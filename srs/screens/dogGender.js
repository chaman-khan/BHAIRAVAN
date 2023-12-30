import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theme} from '../assets/constants/theme';

const DogGender = () => {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity activeOpacity={1} style={styles.back}>
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
              <FontAwesome name={'venus'} color={'black'} size={50} />
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
              <FontAwesome name={'mars'} color={'black'} size={50} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Perference', {value: ''})}
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
    paddingHorizontal: 20,
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
  select: {
    width: 130,
    height: 130,
    paddingLeft: 45,
    paddingTop: 30,
    borderRadius: 15,
    marginTop: 15,
    marginHorizontal: 10,
    borderWidth: 2,
  },
  back: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: '500'
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
