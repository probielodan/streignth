import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default BottomTabs;