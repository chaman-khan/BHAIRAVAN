import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../assets/constants/theme';

const DogBreed = ({navigation}) => {
  const [mixedBreedSelected, setMixedBreedSelected] = useState(false);
  const [pureBreedSelected, setPureBreedSelected] = useState(false);
  const [championBreedSelected, setChampionBreedSelected] = useState(false);
  const [indieBreedSelected, setIndieBreedSelected] = useState(false);

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
          <Image
            source={require('../assets/images/leftLogo.png')}
            style={{alignSelf: 'flex-start'}}
          />
          <Text style={styles.mainTxt}>What breed is your dog?</Text>

          <Text style={styles.txt}>
            Get individual tips based on the dog’s breed
          </Text>
          <View style={{width: '90%'}}>
            <Text style={styles.txt1}>Dog Breed</Text>
            <Text style={styles.border} />
            <View style={styles.view}>
              <TouchableOpacity
                style={{
                  ...styles.touch,
                  backgroundColor: mixedBreedSelected
                    ? '#ECAC50'
                    : 'transparent',
                }}
                onPress={() => {
                  setMixedBreedSelected(!mixedBreedSelected);
                  setPureBreedSelected(false);
                  setChampionBreedSelected(false);
                  setIndieBreedSelected(false);
                }}>
                <Text style={styles.btnTxt}>Mixed Breed</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  ...styles.touch,
                  backgroundColor: pureBreedSelected
                    ? '#ECAC50'
                    : 'transparent',
                }}
                onPress={() => {
                  setMixedBreedSelected(false);
                  setPureBreedSelected(!pureBreedSelected);
                  setChampionBreedSelected(false);
                  setIndieBreedSelected(false);
                }}>
                <Text style={styles.btnTxt}>Pure Breed</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.view}>
              <TouchableOpacity
                style={{
                  ...styles.touch,
                  backgroundColor: championBreedSelected
                    ? '#ECAC50'
                    : 'transparent',
                }}
                onPress={() => {
                  setMixedBreedSelected(false);
                  setPureBreedSelected(false);
                  setChampionBreedSelected(!championBreedSelected);
                  setIndieBreedSelected(false);
                }}>
                <Text style={styles.btnTxt}>Champion Breed</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  ...styles.touch,
                  backgroundColor: indieBreedSelected
                    ? '#ECAC50'
                    : 'transparent',
                }}
                onPress={() => {
                  setMixedBreedSelected(false);
                  setPureBreedSelected(false);
                  setChampionBreedSelected(false);
                  setIndieBreedSelected(!indieBreedSelected);
                }}>
                <Text style={styles.btnTxt}>Indie Breed</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require('../assets/images/rightLogo.png')}
              style={{alignSelf: 'flex-end', marginTop: 30}}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Preference')}
              style={styles.btn}>
              <Text
                style={{
                  color: '#3A2A28',
                  fontFamily: 'Unbounded',
                  fontSize: 16,
                }}>
                Next
              </Text>
            </TouchableOpacity>
            <Image
              source={require('../assets/images/leftLogo.png')}
              style={{marginTop: 40}}
            />
          </View>
        </View>
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
    fontSize: 24,
    color: theme.colors.brown900,
    fontWeight: '700',
    marginTop: 20,
    fontFamily: 'Unbounded',
  },
  txt: {
    width: '90%',
    textAlign: 'center',
    paddingHorizontal: 22,
    fontSize: 13,
    color: theme.colors.brown900,
    fontWeight: '600',
    marginTop: 20,
    fontFamily: 'Unbounded',
  },
  txt1: {
    color: '#3A2A28',
    fontSize: 32,
    fontWeight: '800',
    opacity: 0.3,
    alignSelf: 'flex-start',
    marginTop: 40,
  },
  border: {
    width: '100%',
    backgroundColor: '#3A2A28',
    height: 2,
    marginTop: 10,
    marginBottom: 20,
  },
  touch: {
    width: '40%',
    height: 50,
    borderColor: 'rgba(0, 0, 0, 0.40)',
    borderWidth: 1,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: '#3A2A28',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Unbounded',
  },
  view: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
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

export default DogBreed;
