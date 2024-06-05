import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './screens/tabScreens/Feed';
import Notifications from './screens/tabScreens/Notifications';
import Settings from './screens/tabScreens/Settings';

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    );
}
