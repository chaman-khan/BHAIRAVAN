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
import colors from '../res/colors';
import {RootStackScreenProps} from '../common/types';

const Setting = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            height: 175,
            backgroundColor: theme.colors.brown900,
            width: 350,
            marginTop: 40,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 15,
                fontFamily: 'Unbounded',
                marginTop: 10,
                marginRight: 270,
                color: colors['yellow.500'],
              }}>
              Back
            </Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                backgroundColor: colors['yellow.500'],
                height: 100,
                width: 100,
                borderWidth: 2,
                borderRadius: 50,
                paddingTop: 5,
                alignItems: 'center',
                marginLeft: 50,
              }}>
              <Image
                style={{marginTop: 15, height: 50, width: 50}}
                source={require('../assets/images/blackFoot.jpg')}
              />
            </View>

            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 35,
                marginLeft: 10,
                color: colors['yellow.500'],
              }}>
              Settings
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: theme.colors.brown900,
            fontWeight: '600',
            marginRight: 150,
            marginTop: 90,
          }}>
          Privacy policy
        </Text>

        <View
          style={{
            borderBottomColor: theme.colors.brown900,
            borderBottomWidth: 1,
            marginVertical: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              width: 310,
              fontSize: 14,
              padding: 10,
              color: theme.colors.brown900,
              textAlign: 'center',
              marginTop: -10,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 16,
            color: theme.colors.brown900,
            fontWeight: '600',
            marginRight: 170,
            marginTop: 70,
          }}>
          Terms of use
        </Text>

        <View
          style={{
            borderBottomColor: theme.colors.brown900,
            borderBottomWidth: 1,
            marginVertical: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              width: 310,
              fontSize: 14,
              padding: 10,
              color: theme.colors.brown900,
              textAlign: 'center',
              marginTop: -10,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors['yellow.200'],
    flex: 1,
    alignItems: 'center',
  },
});

export default Setting;
