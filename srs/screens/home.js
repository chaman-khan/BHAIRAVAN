import React from 'react';
import {StyleSheet, Image, ScrollView, View, Text} from 'react-native';
const Home = () => {
  const Row = ({image, text}) => (
    <View
      style={{
        marginVertical: 10,
        backgroundColor: 'transparent',
        borderTopColor: colors['brown.900'],
        borderBottomColor: colors['brown.900'],
        borderTopWidth: 2,
        borderBottomWidth: 2,
        paddingVertical: 20,
        flexDirection: 'row',
        paddingHorizontal: 16,
      }}>
      <Image style={{height: 33, width: 38}} source={image} />
      <Text
        style={{
          fontSize: 22,
          fontFamily: 'Unbounded',
          fontWeight: '500',
          paddingLeft: 10,
        }}>
        {text}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginVertical: 20,
            padding: 30,
            paddingBottom: 40,
            backgroundColor: colors['yellow.500'],
            shadowColor: colors['brown.900'],
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Image source={require('../assets/images/blackFoot.png')} />
          <Text
            style={{fontFamily: 'Unbounded', fontSize: 20, fontWeight: '700'}}>
            BHAIRAVAN
          </Text>
        </View>
        <Row
          image={require('../assets/images/heart.png')}
          text={'Likes'}
        />
        <Row
          image={require('../assets/images/matches.png')}
          text={'Matches'}
        />
        <Row image={require('../assets/images/chat.png')} text={'Chats'} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,

    backgroundColor: colors['yellow.200'],
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default Home;
