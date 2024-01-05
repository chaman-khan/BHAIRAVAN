/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import MainNav from './srs/navigation/mainNav';
import { Provider } from 'react-redux';
import { store } from './srs/redux/store';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <MainNav />
      </SafeAreaView>
    </Provider>
  );
};
export default App;
