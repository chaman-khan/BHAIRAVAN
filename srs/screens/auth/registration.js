import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RootStackScreenProps} from '../common/types';
const countries = ['India', 'Egypt', 'Canada', 'Australia', 'Ireland'];

const Registration = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/regLogo.png')}
      />
      <View style={styles.login_container}>
        <Text style={styles.register}>Register</Text>
        <Text style={{width: '100%', height: 2, backgroundColor: '#F7DC9C'}} />
        <Text style={styles.phone}>Phone Number</Text>
        <Image
          style={{marginBottom: -2}}
          source={require('../../assets/images/upperArrow.png')}
        />
        <Text style={{width: '100%', height: 2, backgroundColor: '#F7DC9C'}} />

        <View style={styles.secondary_container}>
          <Text style={styles.what_is_your_phone}>
            What is your phone number?
          </Text>

          <View
            style={{paddingVertical: 30, flexDirection: 'row', width: '100%'}}>
            <SelectDropdown
              defaultButtonText=" "
              renderDropdownIcon={isOpened => {
                return (
                  <Image source={require('../../assets/images/down.png')} tintColor={'#444'} />
                  // <FontAwesome
                  //   name={isOpened ? 'chevron-up' : 'chevron-down'}
                  //   color={'#444'}
                  //   size={18}
                  // />
                );
              }}
              dropdownStyle={{
                backgroundColor: '#F7DC9C',
                borderRadius: 8,
                borderWidth: 2,
                borderColor: '#3A2A28',
                minWidth: 150,
              }}
              data={countries}
              buttonStyle={{
                padding: 10,
                marginHorizontal: 10,
                width: 100,
                borderRadius: 20,
                backgroundColor: '#937E5F',
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
            />

            <TextInput
              style={{
                backgroundColor: '#937E5F',
                fontSize: 20,
                height: 50,
                lineHeight: 50,
                flex: 1,
                borderRadius: 15,
                padding: 10,
                marginHorizontal: 10,
                fontFamily: 'Unbounded',
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Otp')}
            style={{
              backgroundColor: '#ECAC50',
              borderRadius: 20,
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                padding: 10,
                color: '#3A2A28',
                fontFamily: 'Unbounded',
              }}>
              SEND CONFIRMATION CODE
            </Text>
          </TouchableOpacity>

          {/* <Link href={{ pathname: "Otp" }} asChild>
            <Pressable>
              <PrimaryButton title=" SEND CONFIRMATION CODE" />
            </Pressable>
          </Link> */}

          <Text style={styles.singing}>
            By signing up you agree with Bhairavan
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Text style={styles.terms}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.of}> of </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <Text style={styles.terms}>Privacy policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7DC9C',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 40,
    marginBottom: 20,
  },
  login_container: {
    flex: 1,
    backgroundColor: '#3A2A28',
    width: '100%',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,

    alignItems: 'center',
  },
  register: {
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: '600',
    fontSize: 32,
    color: '#ECAC50',
    fontFamily: 'Unbounded',
  },

  phone: {
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 20,
    paddingBottom: 10,
    color: '#ECAC50',
    fontFamily: 'Unbounded',
  },

  secondary_container: {
    paddingVertical: 30,
    alignItems: 'center',
  },

  what_is_your_phone: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ECAC50',
    fontFamily: 'Unbounded',
  },
  singing: {
    fontSize: 12,
    color: '#ECAC50',
    fontWeight: '300',
    paddingTop: 20,
    paddingBottom: 4,
    fontFamily: 'Unbounded',
    justifyContent: 'center',
  },
  already: {
    fontSize: 13,
    color: '#ECAC50',
    fontWeight: '500',
    fontFamily: 'Unbounded',
    justifyContent: 'center',
  },
  terms: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ECAC50',
    fontFamily: 'Unbounded',
    justifyContent: 'center',
  },
  of: {
    fontSize: 10,
    fontWeight: '400',
    color: '#ECAC50',
    fontFamily: 'Unbounded',
    justifyContent: 'center',
  },
});

export default Registration;
