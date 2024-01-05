import React, {useEffect, useState} from 'react';
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
import {Country} from 'country-state-city';
import {theme} from '../../assets/constants/theme';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad, registerUser} from '../../redux/actions/auth';

const Registration = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [Number, setNumber] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [countries, setCountries] = useState([]);

  const [phone_numberError, setPhone_numberError] = useState(false);
  const [countryCodeError, setCountryCodeError] = useState(false);

  const dispatch = useDispatch();

  const {authLoading} = useSelector(state => state.auth);

  const handleSignUp = () => {
    if (!Number) {
      setPhone_numberError(true);
    } else {
      setPhone_numberError(false);
    }
    if (!countryCode) {
      setCountryCodeError(true);
    } else {
      setCountryCodeError(false);
    }
    if (!Number || !countryCode) {
      Alert.alert(
        'Warning',
        'Please enter complete details',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
    } else {
      dispatch(authLoad(true));

      var raw = JSON.stringify({
        phone_code: '92',
        phone: '33238773743',
      });
      console.log(raw);
      dispatch(registerUser(raw, onSuccess, onError));
    }
  };

  const onSuccess = val => {
    dispatch(authLoad(false));

    Alert.alert(
      val.status === 'success' ? 'Success' : 'Error',
      val.status === 'success'
        ? val.message
        : val.message || val.message.message,
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed');
            // val.status === 'success' && navigation.navigate('SignupVerify');
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

  const fetchCountryData = async () => {
    const countries = Country.getAllCountries();
    setCountries(countries);
    const countryData = countries.map(country => ({
      label: country.isoCode + '  ' + country.flag,
      value: country.name,
      code: country.phonecode,
    }));
    setCountryData(countryData);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);
  useEffect(() => {
    // Find the country based on the entered country code
    const countryWithCode = countries.find(
      country => country.phonecode === countryCode,
    );

    if (countryWithCode) {
      setSelectedCountry(countryWithCode.name);
      setCountryCode(countryWithCode.phonecode);
    }
  }, [countryCode]);

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
            style={{
              paddingVertical: 30,
              flexDirection: 'row',
              width: '95%',
              alignSelf: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
            <Dropdown
              style={[
                styles.dropdown1,
                isFocus && {borderColor: theme.colors.yellow200},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              // iconStyle={styles.iconStyle}
              data={countryData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Country' : '...'}
              searchPlaceholder="Search..."
              value={selectedCountry}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setSelectedCountry(item.value);
                setCountryCode(item.code);
                setIsFocus(false);
              }}
              renderRightIcon={() => (
                <Image source={require('../../assets/images/downArrow.png')} />
              )}
            />
            <View style={styles.input}>
              <TextInput
                style={{width: '25%', fontSize: 16, color: 'black'}}
                value={`+${countryCode}`}
                onChangeText={txt => setCountryCode(txt.replace(/\D/g, ''))}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor={theme.colors.brown900}
                style={{fontSize: 16, color: theme.colors.brown900}}
                keyboardType="numeric"
                value={Number}
                onChangeText={txt => setNumber(txt)}
              />
            </View>
          </View>

          <View
            style={{
              paddingVertical: 30,
              flexDirection: 'row',
              width: '95%',
              alignSelf: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
            {countryCodeError && <Text style={{color:'red'}}>* Select country please</Text>}
            {phone_numberError && <Text style={{color:'red'}}>* Write your Contat</Text>}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Verify_Screen')}
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
  dropdown1: {
    width: '35%',
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.brown200,
  },
  dropdown: {
    width: '100%',
    height: 50,
    borderColor: theme.colors.brown200,
    borderWidth: 0.3,
    borderRadius: 6,
    paddingHorizontal: 30,
  },
  DropDown_Item: {
    height: 30,
    width: '20%',
    fontSize: 25,
    fontFamily: 'Poppins',
    color: '#000000',
    fontWeight: '400',
  },
  placeholderStyle: {
    fontFamily: 'Inter',
    color: theme.colors.brown900,
    fontSize: 16,
    fontWeight: '400',
  },
  selectedTextStyle: {
    // height:48,
    width: '81%',
    fontSize: 16,
    fontFamily: 'Inter',
    color: theme.colors.brown900,
    fontWeight: '400',
  },
  input: {
    backgroundColor: '#937E5F',
    flexDirection: 'row',
    fontSize: 20,
    height: 50,
    lineHeight: 50,
    flex: 1,
    borderRadius: 35,
    alignItems: 'center',
    paddingHorizontal: 10,
    fontFamily: 'Unbounded',
  },
  iconStyle: {
    color: theme.colors.brown900,
  },
});

export default Registration;
