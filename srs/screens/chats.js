import React from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';

const Chats = () => {
  const DATA = [
    {
      id: 1,
      name: Amelia,
      image: require('../assets/images/user1.png'),
    },
    {
      id: 2,
      name: James,
      image: require('../assets/images/user2.png'),
    },
    {
      id: 3,
      name: Clara,
      image: require('../assets/images/user3.png'),
    },
    {
      id: 4,
      name: Emily,
      image: require('../assets/images/user4.png'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image source={item.image} />
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#ECAC50'}}>
      <View style={styles.topBar}>
        <Text style={{color: '#3A2A28', fontSize: 15, fontWeight: '500'}}>
          Back
        </Text>
        <Image source={require('../assets/images/add.png')} />
      </View>
      <View style={styles.main}>
        <View style={styles.profilebtn}>
          <Image
            source={require('../assets/images/blackFoot.png')}
            style={{width: 28, height: 28}}
          />
        </View>
        <Text style={styles.Chats}>Chats</Text>
      </View>
      <View style={styles.input}>
        <Image source={require('../assets/images/search.png')} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={'black'}
          style={{color: 'black'}}
        />
      </View>
      <View>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    height: 69,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomColor: '#3A2A28',
    borderBottomWidth: 1,
  },
  profilebtn: {
    backgroundColor: '#ECAC50',
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
  },
  main: {
    width: '85%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: 50,
    marginBottom: 10,
  },
  Chats: {
    color: '#3A2A28',
    fontSize: 35,
    fontWeight: '500',
    fontFamily: 'Unbounded',
  },
  input: {
    width: '85%',
    alignSelf: 'center',
    height: 52,
    backgroundColor: 'rgba(58, 42, 40, 0.18)',
    borderRadius: 18,
    paddingHorizontal: 15,
    gap: 10,
    marginBottom: 10,
  },
  item: {
    width: '100%',
    height: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderColor: '#3A2A28',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 25,
  },
});
export default Chats;
