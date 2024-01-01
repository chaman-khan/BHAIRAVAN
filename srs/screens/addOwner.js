import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {theme} from '../assets/constants/theme';
const AddOwner = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            width: '90%',
            alignSelf: 'center',
            marginBottom: 40,
            marginTop: 20,
          }} onPress={() => navigation.goBack()}>
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
          />
        </View>

        <View style={{height: 20}}></View>
        {/* <Link href={{ pathname: "AddPicture" }} asChild> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('AddPicture')}
          style={styles.btn}>
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
          style={styles.btn}>
          <Text
            style={{color: '#3A2A28', fontFamily: 'Unbounded', fontSize: 16}}>
            Don't have a dog?
          </Text>
        </TouchableOpacity>
        {/* </Link> */}
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
  back: {
    color: '#3A2A28',
    fontSize: 15,
    fontFamily: 'Unbounded',
    alignSelf: 'flex-end',
  },
});

export default AddOwner;
