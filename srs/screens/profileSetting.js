import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {theme} from '../assets/constants/theme';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';

const ProfileSetting = ({navigation}) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [img, setImg] = useState(null);

  const gallery = () => {
    ImagePicker.openPicker({}).then(images => {
      console.log(images);
      setImg(images.path);
    });
  };

  const createBlobFromImage = async (imageUri) => {
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error("Error creating Blob from image:", error);
      throw error;
    }
  };

  const dispatch = useDispatch();
  const {authLoading, loginData} = useSelector(state => state.auth);
  const handleUpdate = async () => {
    if (!name || !breed || !img) {
      Alert.alert('Alert', 'All fields required');
    } else {
      dispatch(authLoad(true));
      const imageBlob = await createBlobFromImage(img);

      var raw = JSON.stringify({
        name: name,
        breed: breed,
        image: imageBlob,
      });
      console.log('raw');
      console.log(raw);
      console.log(loginData);
      console.log('..................................................');
      dispatch(addOwner(loginData, raw, onSuccess, onError));
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
            val.status === true && navigation.navigate('Drawer');
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
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backTxt}>Back</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <View style={styles.img}>
            <Image
              source={require('../assets/images/blackFoot.png')}
              style={{width: 28, height: 28}}
            />
          </View>
          <Text style={styles.mainTxt}>Profile Settings</Text>
        </View>
        <Text style={styles.border} />
        <View style={styles.view}>
          <Text style={styles.txt}>Change Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={txt => setName(txt)}
          />
        </View>
        <View style={styles.view}>
          <Text style={styles.txt}>Change Dog Breed</Text>
          <TextInput
            style={styles.input}
            value={breed}
            onChangeText={txt => setBreed(txt)}
          />
        </View>
        <View style={styles.view}>
          <Text style={styles.txt}>Change Dog Image</Text>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.input}
            onPress={gallery}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: theme.colors.yellow200,
    flex: 1,
    alignItems: 'center',
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
    // alignSelf: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 15,
    marginBottom: 50,
  },
  img: {
    backgroundColor: '#ECAC50',
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
  },
  mainTxt: {
    color: '#000',
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'Unbounded',
  },
  border: {width: '100%', height: 2, backgroundColor: '#3A2A28'},
  view: {
    width: '70%',
    alignSelf: 'center',
    gap: 10,
    marginVertical: 30,
  },
  txt: {
    color: '#3A2A28',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Unbounded',
  },
  input: {
    borderBottomColor: 'rgba(0, 0, 0, 0.73)',
    borderBottomWidth: 1,
  },
});

export default ProfileSetting;
