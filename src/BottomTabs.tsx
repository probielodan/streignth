import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

function BottomTabs() {
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
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default BottomTabs;