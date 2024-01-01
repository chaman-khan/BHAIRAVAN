import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../assets/constants/theme';

const Setting = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={styles.img}>
              <Image
                style={{marginTop: 15, height: 50, width: 50}}
                source={require('../assets/images/blackFoot.png')}
              />
            </View>

            <Text style={styles.mainTxt}>Settings</Text>
          </View>
        </View>
        <Text style={styles.txt}>Privacy policy</Text>

        <Text style={styles.border} />

        <Text style={styles.txt}>Terms of use</Text>

        <Text style={styles.border} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    backgroundColor: theme.colors.yellow200,
    flex: 1,
    alignItems: 'center',
  },
  topView: {
    height: 175,
    backgroundColor: theme.colors.brown900,
    width: '100%',
    borderColor: '#F7DC9C',
    borderWidth: 4,
  },
  back: {
    textAlign: 'right',
    fontSize: 15,
    fontFamily: 'Unbounded',
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: theme.colors.yellow900,
  },
  img: {
    backgroundColor: theme.colors.yellow900,
    height: 100,
    width: 100,
    borderWidth: 2,
    borderRadius: 50,
    paddingTop: 5,
    alignItems: 'center',
    marginLeft: 50,
  },
  mainTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 35,
    marginLeft: 10,
    color: theme.colors.yellow900,
  },
  txt: {
    width: '70%',
    fontSize: 16,
    color: theme.colors.brown900,
    fontWeight: '600',
    
    marginTop: 90,
  },
  border: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.73)',
    height: 1,
    marginTop: 50,
  },
});

export default Setting;
