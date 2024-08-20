// src/RootStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Workout from './Workout';
import { useTheme } from './ThemeContext'; // Import your theme context

const Stack = createStackNavigator();

function RootStack() {
  const { isDarkMode } = useTheme(); // Access the dark mode state

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? '#000000' : '#ffffff', // Apply dark mode background color
        },
        headerTintColor: isDarkMode ? '#ffffff' : '#000000', // Apply dark mode text color
        cardStyle: {
          backgroundColor: isDarkMode ? '#000000' : '#ffffff', // Apply dark mode background color
        },
      }}
    >
      <Stack.Screen 
        name="HomeTabs" 
        component={BottomTabs} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Workout" 
        component={Workout} 
        options={{ title: 'Workout' }} // Optionally set a title
      />
    </Stack.Navigator>
  );
}

export default RootStack;
