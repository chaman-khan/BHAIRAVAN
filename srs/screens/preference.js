import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {theme} from '../assets/constants/theme';

const Preference = ({navigation}) => {
  const [play, setPlay] = useState(false);
  const [adopt, setAdopt] = useState(false);
  const [mate, setMate] = useState(false);
  const [missing, setMissin] = useState(false);
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../assets/images/topTop.png')}
          style={{position: 'absolute', left: 0}}
        />
        <TouchableOpacity activeOpacity={1} style={styles.back} onPress={() => navigation.goBack()}>
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
            <Image source={require('../assets/images/play.png')} />
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
            <Image source={require('../assets/images/mate.png')} />
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
            <Image source={require('../assets/images/missing.png')} />
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
            <Image source={require('../assets/images/adopt.png')} />
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/images/nextTop.png')} style={{marginTop: 50}} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Drawer')}
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
    fontWeigh: '700',
    fontFamily: 'Unbounded',
    marginVertical: 40,
  },
  view: {
    width: '45%',
    height: 162,
    borderColor: '#3A2A28',
    borderWidth: 1,
    borderRadius: 17,
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
