import React from 'react';
import { ThemeProvider } from '@contexts/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from '@navigation/RootStack';

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
