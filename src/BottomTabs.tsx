import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from './ThemeContext';

import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const { isDarkMode } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Profile':
              iconName = 'person-circle';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
            default:
              iconName = '';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: isDarkMode ? '#ffffff' : '#000000',
        tabBarInactiveTintColor: isDarkMode ? '#888888' : '#cccccc',
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#000000' : '#ffffff',
          borderTopWidth: 1,
          borderTopColor: isDarkMode ? '#333333' : '#dcdcdc',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: isDarkMode ? '#000000' : '#ffffff',
          borderBottomWidth: 0.75, 
          borderTopWidth: 1,
          borderBottomColor: isDarkMode ? '#333333' : '#dcdcdc', // Grey color for the line
          borderTopColor: isDarkMode ? '#333333' : '#dcdcdc',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
        },
        headerTitleStyle: {
          color: isDarkMode ? '#ffffff' : '#000000',
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
