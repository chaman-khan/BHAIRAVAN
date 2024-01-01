import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { theme } from '../assets/constants/theme';

const ProfileSetting = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity activeOpacity={1} style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={styles.backTxt}>Back</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <View style={styles.img}>
            <Image
              source={require('../assets/images/blackFoot.png')}
              style={{width: 28, height: 28}}
            />
          </View>
          <Text style={styles.mainTxt}>Profile Settings</Text>
        </View>
        <Text style={styles.border} />
        <View style={styles.view}>
          <Text style={styles.txt}>Change Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.view}>
          <Text style={styles.txt}>Change Dog Breed</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.view}>
          <Text style={styles.txt}>Change Dog Image</Text>
          <TextInput style={styles.input} />
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
    // alignSelf: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 15,
    marginBottom: 50,
  },
  img: {
    backgroundColor: '#ECAC50',
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
  },
  mainTxt: {
    color: '#000',
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'Unbounded',
  },
  border: {width: '100%', height: 2, backgroundColor: '#3A2A28'},
  view: {
    width: '70%',
    alignSelf: 'center',
    gap: 10,
    marginVertical: 30,
  },
  txt: {
    color: '#3A2A28',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Unbounded',
  },
  input: {
    borderBottomColor: 'rgba(0, 0, 0, 0.73)',
    borderBottomWidth: 1,
  },
});

export default ProfileSetting;
