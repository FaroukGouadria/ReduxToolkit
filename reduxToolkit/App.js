/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';



const App = () => {
console.log(store.getState());
  return (
    <Provider store={store} >
    <HomeScreen />
    </Provider>
   
  );
}
export default App;
