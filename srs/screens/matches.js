import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getMatches} from '../redux/actions/home';
const {width, height} = Dimensions.get('screen');
const Matches = ({navigation}) => {
  const [DATA, setDATA] = useState([]);

  const dispatch = useDispatch();
  const {authLoading, loginData} = useSelector(state => state.auth);
  const DATAA = [
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

  const handleData = async () => {
    if (!source || !source1) {
      Alert.alert('Alert', 'Select both images');
    } else {
      dispatch(authLoad(true));
    }
    dispatch(getMatches(loginData, formData, onSuccess, onError));
  };

  const onSuccess = val => {
    dispatch(authLoad(false));

    console.log('====================================');
    console.log(val);
    console.log('====================================');
    Alert.alert(
      val.status === true ? 'Success' : 'Error',
      val.status === true ? val.message : val.message || val.message.message,
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed');
            val.status === true && navigation.navigate('DogAge');
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
  const handleSwipe = (event, item) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX > 0) {
        // Right swipe
        Alert.alert('Right Swipe', `Droped ${item.name} now`);
      } else {
        // Left swipe
        Alert.alert('Left Swipe', `${item.name} now in your likeS`);
      }
    }
  };

  const renderItem = ({item}) => {
    return (
      <PanGestureHandler
        onHandlerStateChange={event => handleSwipe(event, item)}>
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
      </PanGestureHandler>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F7DC9C'}}>
      <View style={styles.topBar}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
          <Text style={styles.backbtn}>Back</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          <Image source={require('../assets/images/matches.png')} />
          <Text
            style={{
              color: '#3A2A28',
              fontSize: 22,
              fontWeight: '600',
              fontFamily: 'Unbounded',
            }}>
            Matches
          </Text>
        </View>
      </View>
      <View style={{height: height / 1.5}}>
        <FlatList
          data={DATAA}
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
  item: {
    width: width / 2 - 20,
    height: 160,
    borderColor: '#3A2A28',
    borderRadius: 17,
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});
export default Matches;
