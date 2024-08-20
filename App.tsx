import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/RootStack';
import { ThemeProvider } from './src/ThemeContext'; 

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
