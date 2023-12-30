import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  
  import PrimaryButton from "../common/components/PrimaryButton";
  import colors from "../res/colors";
  import { RootStackScreenProps } from "../common/types";

const DogGender = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={{
            fontSize: 24,
            color: colors['brown.900'],
            fontWeight: '600',
            marginTop: 80,
            fontFamily: 'Unbounded',
          }}>
          How old is your dog?
        </Text>

        <Text
          style={{
            textAlign: 'center',
            paddingHorizontal: 22,
            fontSize: 13,
            color: colors['brown.900'],
            fontWeight: '600',
            marginTop: 20,
            fontFamily: 'Unbounded',
          }}>
          Depending on the age, we wil advise the best individual plan for
          traning and walking activities
        </Text>

        <View style={{flexDirection: 'row', marginTop: 120}}>
          <View
            style={{
              borderBottomColor: colors['brown.900'],
              borderBottomWidth: 2,
              marginVertical: 20,
              alignItems: 'center',
              marginHorizontal: 22,
            }}>
            <TextInput
              style={{
                fontFamily: 'Unbounded',
                width: 50,
                fontSize: 14,
                padding: 10,
                color: colors['brown.900'],
                textAlign: 'center',
              }}
            />
          </View>
          <View
            style={{
              borderBottomColor: colors['brown.900'],
              borderBottomWidth: 2,
              marginHorizontal: 30,
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                fontFamily: 'Unbounded',
                width: 50,
                fontSize: 14,
                padding: 10,
                color: colors['brown.900'],
                textAlign: 'center',
                marginRight: 10,
              }}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', margin: 50}}>
          <Text
            style={{
              fontFamily: 'Unbounded',
              fontSize: 13,
              color: colors['brown.900'],
              fontWeight: '600',
              marginHorizontal: 20,
              marginTop: -65,
            }}>
            Year (s)
          </Text>

          <Text
            style={{
              fontFamily: 'Unbounded',
              fontSize: 13,
              color: colors['brown.900'],
              fontWeight: '600',
              marginHorizontal: 25,
              marginTop: -65,
            }}>
            Month (s)
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('DogAge')}>
          <PrimaryButton title="Next" />
        </TouchableOpacity>
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

export default DogGender;
