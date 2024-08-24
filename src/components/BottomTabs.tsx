import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@contexts/ThemeContext';

import { Dashboard } from '@screens/Dashboard';
import { Activity } from '@screens/Activity';
import { Chat } from '@screens/Chat';
import { Profile } from '@screens/Menu';
import { Settings } from '@screens/Menu';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const { isDarkMode } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Dashboard':
              iconName = 'home';
              break;
            case 'Activity':
              iconName = 'barbell-outline';
              break;
            case 'Nutrition':
              iconName = 'nutrition-outline';
              break;
            case 'Chat':
              iconName = 'chatbox-ellipses-outline';
              break;
            case 'Menu':
              iconName = 'menu-outline';
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
        // headerTitleAlign: 'center',
        // headerStyle: {
        //   backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        //   borderBottomWidth: 0.75,
        //   borderTopWidth: 1,
        //   borderBottomColor: isDarkMode ? '#333333' : '#dcdcdc', // Grey color for the line
        //   borderTopColor: isDarkMode ? '#333333' : '#dcdcdc',
        //   elevation: 5,
        //   shadowColor: '#000',
        //   shadowOffset: { width: 0, height: 2 },
        //   shadowOpacity: 0.2,
        //   shadowRadius: 2,
        // },
        // headerTitleStyle: {
        //   color: isDarkMode ? '#ffffff' : '#000000',
        // },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Nutrition" component={Settings} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Menu" component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
