import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RootStackScreenProps} from '../common/types';
import {theme} from '../assets/constants/theme';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {baseUrl} from '../constants/constant';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad} from '../redux/actions/auth';
import {addPictures} from '../redux/actions/home';
import {Loading} from '../components/loading';

const {height} = Dimensions.get('screen');

const AddPicture = ({navigation}) => {
  const [source, setSource] = useState(null);
  const [source1, setSource1] = useState(null);
  const [type, setType] = useState(null);
  const [type1, setType1] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileName1, setFileName1] = useState(null);
  const dispatch = useDispatch();
  const {authLoading, loginData} = useSelector(state => state.auth);
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };

  const gallery = async () => {
    const images = await launchImageLibrary(options);
    console.log(images.assets);
    setSource(images.assets[0].uri);
    setFileName(images.assets[0].fileName);
    setType(images.assets[0].type);
  };
  const gallery1 = async () => {
    const images = await launchImageLibrary(options);
    console.log(images.assets);
    setSource1(images.assets[0].uri);
    setFileName1(images.assets[0].fileName);
    setType1(images.assets[0].type);
  };

  const uploadImages = async () => {
    if (!source || !source1) {
      Alert.alert('Alert', 'Select both images');
    } else {
      dispatch(authLoad(true));
      const formData = new FormData();

      // Add images to formData
      if (source) {
        formData.append('owner_image', {
          uri: source,
          type: type, // Adjust type based on your image format
          name: fileName, // Adjust the filename as needed
        });
      }

      if (source1) {
        formData.append('dog_image', {
          uri: source1,
          type: type1, // Adjust type based on your image format
          name: fileName1, // Adjust the filename as needed
        });
      }
      dispatch(addPictures(loginData, formData, onSuccess, onError));
    }
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

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backTxt}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.main}>Add Picture</Text>

          <View style={{width: '40%'}}>
            <Text style={styles.txt}>1. Owner and Dog</Text>
          </View>

          <TouchableOpacity style={styles.camera} onPress={gallery}>
            {source == null ? (
              <Image source={require('../assets/images/camera.png')} />
            ) : (
              <Image
                source={{uri: source}}
                style={{width: '100%', height: '100%', borderRadius: 15}}
              />
            )}
          </TouchableOpacity>

          <View style={{width: '40%'}}>
            <Text style={styles.txt}>2. Only Dog</Text>
          </View>

          <TouchableOpacity style={styles.camera} onPress={gallery1}>
            {source1 == null ? (
              <Image source={require('../assets/images/camera.png')} />
            ) : (
              <Image
                source={{uri: source1}}
                style={{width: '100%', height: '100%', borderRadius: 15}}
              />
            )}
          </TouchableOpacity>

          <View style={{height: 20, marginTop: 40}}></View>

          <TouchableOpacity
            onPress={uploadImages}
            style={{...styles.btn, marginBottom: 20}}>
            <Text
              style={{color: '#3A2A28', fontFamily: 'Unbounded', fontSize: 16}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <Loading visible={authLoading} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.yellow200,
    flex: 1,
    alignItems: 'center',
    height: height,
  },
  btn: {
    width: '85%',
    height: 61,
    alignSelf: 'center',
    backgroundColor: '#ECAC50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 106,
  },
  txt: {
    fontFamily: 'Unbounded',
    fontSize: 16,
    color: theme.colors.brown900,
    fontWeight: '700',
    marginTop: 25,
    textAlign: 'left',
  },
  camera: {
    width: '40%',
    height: 150,
    backgroundColor: theme.colors.brown900,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 15,
  },
  main: {
    fontFamily: 'Unbounded',
    fontSize: 26,
    color: theme.colors.brown900,
    fontWeight: '700',
    marginVertical: 50,
  },
  back: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  backTxt: {
    color: '#3A2A28',
    fontSize: 15,
    fontFamily: 'Unbounded',
    alignSelf: 'flex-end',
  },
});

export default AddPicture;
