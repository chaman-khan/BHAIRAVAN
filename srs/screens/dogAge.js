import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  
  import PrimaryButton from "../common/components/PrimaryButton";
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  import colors from "../res/colors";
  import { RootStackScreenProps } from "../common/types";

const DogAge = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={{
            fontFamily: 'Unbounded',
            fontSize: 20,
            color: colors['brown.900'],
            fontWeight: '600',
            marginTop: 100,
            marginRight: 0,
          }}>
          What is the dog's gender?
        </Text>

        <Text
          style={{
            fontFamily: 'Unbounded',
            fontSize: 13,
            color: colors['brown.900'],
            fontWeight: '600',
            marginTop: 13,
          }}>
          Select dog's gender
        </Text>

        <View style={{flexDirection: 'row', height: 175, width: '100%', alignItems: 'flex-end', justifyContent: 'center'}}>
            <Image source={require('../assets/images/leftLogo.png')} />
            <Image source={require('../assets/images/logo.png')} />
            <Image source={require('../assets/images/rightLogo.png')} />
        </View>
        {/* <Image
          style={{marginTop: 10, height: 130, width: 220}}
          source={require('../res/images/pngs/footprint_group.png')}
        /> */}

        <View style={{flexDirection: 'row', margin: 60}}>
          <View style={{flexDirection: 'row', margin: 30}}>
            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
                paddingLeft: 45,
                paddingTop: 30,
                borderRadius: 15,
                marginTop: 15,
                marginHorizontal: 10,
                borderWidth: 2,
              }}>
              <FontAwesome name={'venus'} color={'black'} size={50} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
                paddingLeft: 45,
                paddingTop: 30,
                borderRadius: 15,
                marginTop: 15,
                marginHorizontal: 10,
                borderWidth: 2,
              }}>
              <FontAwesome name={'mars'} color={'black'} size={50} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Perference', {value: ''})}>
          <PrimaryButton title="Next" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      backgroundColor: colors["yellow.200"],
      flex: 1,
      alignItems: "center",
    },
  });

export default DogAge;
