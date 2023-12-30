import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../assets/constants/theme';

const DogAge = () => {
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity activeOpacity={1} style={styles.back}>
          <Text style={styles.backTxt}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.mainTxt}>How old is your dog?</Text>

        <Text style={styles.txt}>
          Depending on the age, we wil advise the best individual plan for
          traning and walking activities
        </Text>

        <View style={{flexDirection: 'row', marginTop: 120}}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.inputView}>
              <TextInput style={styles.input} />
            </View>
            <Text>Year (s)</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.inputView}>
              <TextInput style={styles.input} />
            </View>
            <Text>Month (s)</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', margin: 50}}></View>

        <TouchableOpacity
          // onPress={() => navigation.navigate('DogAge')}
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
  mainTxt: {
    fontSize: 24,
    color: theme.colors.brown900,
    fontWeight: '700',
    marginTop: 80,
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
  input: {
    fontFamily: 'Unbounded',
    width: 50,
    fontSize: 14,
    padding: 10,
    color: theme.colors.brown900,
    textAlign: 'center',
  },
  inputView: {
    borderBottomColor: theme.colors.brown900,
    borderBottomWidth: 2,
    marginVertical: 20,
    alignItems: 'center',
    marginHorizontal: 22,
  },
  date: {
    fontFamily: 'Unbounded',
    fontSize: 13,
    color: theme.colors.brown900,
    fontWeight: '600',
    marginHorizontal: 20,
    marginTop: -65,
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

export default DogAge;
