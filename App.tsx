/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BottomTabs from './src/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
       <BottomTabs />
    </NavigationContainer>
  );
}

export default App;