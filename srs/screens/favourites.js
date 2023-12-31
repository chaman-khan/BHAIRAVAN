import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
const Favourites = () => {
  const DATA = [
    {
      id: 1,
      image: require('../assets/images/image1.png'),
      name: 'Afador',
      one: 'Breed group: Hybrid ',
      second: 'Lifespan: 10-12 years',
    },
    {
      id: 2,
      image: require('../assets/images/image2.png'),
      name: 'Affenchon',
      one: 'Mixed Breed Dogs',
      second: 'LIFE SPAN: 10 to 15 years',
    },
    {
      id: 3,
      image: require('../assets/images/image3.png'),
      name: 'Affenhuahua',
      one: 'Mixed Breed Dogs',
      second: 'Lifespan: 13 to 18 years',
    },
    {
      id: 4,
      image: require('../assets/images/image4.png'),
      name: 'Akita Bernard',
      one: '. Mixed Breed Dogs',
      second: 'Lifespan: 8 to 11 years',
    },
    {
      id: 5,
      image: require('../assets/images/image1.png'),
      name: 'Afador',
      one: 'Breed group: Hybrid ',
      second: 'Lifespan: 10-12 years',
    },
    {
      id: 6,
      image: require('../assets/images/image2.png'),
      name: 'Affenchon',
      one: 'Mixed Breed Dogs',
      second: 'LIFE SPAN: 10 to 15 years',
    },
    {
      id: 7,
      image: require('../assets/images/image3.png'),
      name: 'Affenhuahua',
      one: 'Mixed Breed Dogs',
      second: 'Lifespan: 13 to 18 years',
    },
    {
      id: 8,
      image: require('../assets/images/image4.png'),
      name: 'Akita Bernard',
      one: '. Mixed Breed Dogs',
      second: 'Lifespan: 8 to 11 years',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.item1}>
        <View style={styles.item}>
          <Image
            source={item.image}
            style={{width: 98, height: 99, borderRadius: 17}}
          />
          <View>
            <Text style={{color: '#000', fontWeight: '500', fontSize: 11}}>
              {item.name}
            </Text>
            <Text style={{color: '#000', fontSize: 6, fontWeight: '300'}}>
              . {item.one}
            </Text>
            <Text style={{color: '#000', fontSize: 6, fontWeight: '300'}}>
              . {item.second}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.btn}>
            <Image source={require('../assets/images/cross.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={require('../assets/images/like.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F7DC9C'}}>
      <View style={styles.topBar}>
        <Text style={styles.backbtn}>Back</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          <Image source={require('../assets/images/heart.png')} />
          <Text
            style={{
              color: '#3A2A28',
              fontSize: 22,
              fontWeight: '500',
              fontFamily: 'Unbounded',
            }}>
            Likes
          </Text>
        </View>
      </View>
      <View style={{height: height / 1.5}}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    height: 144,
    padding: 20,
    borderColor: '#3A2A28',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  backbtn: {
    color: '#3A2A28',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'right',
  },

  item1: {
    width: width / 2 - 20,
    gap: 10,
    margin: 10,
  },
  item: {
    width: '100%',
    height: 160,
    borderColor: '#3A2A28',
    borderRadius: 17,
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  btn: {
    width: 44,
    height: 44,
    backgroundColor: '#ECAC50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22
  },
});
export default Favourites;
