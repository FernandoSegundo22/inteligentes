import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './screens/tabScreens/Feed';
import Notifications from './screens/tabScreens/Notifications';
import Settings from './screens/tabScreens/Settings';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './screens/tabScreens/homeStack/detailsScreen';

const Stack = createNativeStackNavigator();

function StackGroup() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="FeedMain"
                component={Feed}
                options={{headerShown:false}}/>
            <Stack.Screen
                name='Details'
                component={DetailsScreen}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: () => <Ionicons name="home" size={32} color="blue"/>
                }
            }
            />

            <Tab.Screen 
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel:"Notifications",
                    tabBarIcon: () => <Ionicons name=  "notifications-outline" size={32} color={"black"}/>
                }} 
            
            />

            <Tab.Screen 
                name="Settings" 
                component={Settings}
                options={{
                    tabBarLabel:"Settings",
                    tabBarIcon: () => <Ionicons name = "settings" size={32} color={"black"}/>
                }}
            
            />

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
