import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IonIcons from 'react-native-vector-icons/Ionicons'
import ConnectToWifi from './ConnectToWifi'
import TrackOrder from './TrackOrder'
import MyDevice from './MyDevice'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator
            style={{ height: 100, backgroundColor: "#000" }}
            initialRouteName=""
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    let rn = route.name

                    if (rn === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (rn === 'TrackOrder') {
                        iconName = focused ? 'location-sharp' : 'location-sharp';
                    } else if (rn === 'MyDevice') {
                        iconName = focused ? 'settings-sharp' : 'settings-sharp';
                    }

                    return <IonIcons name={iconName} size={size} color={focused ? "#2D75FF" : "#000"} />
                },
                tabBarLabel: ({ focused }) => {
                    let rn = route.name

                    if (rn === 'Home') {
                        return focused ?
                            <Text style={{ color: "#2D75FF", fontSize: 15, }}>{rn}</Text>
                            : <Text style={{ color: "#000", fontSize: 15, }}>{rn}</Text>
                    } else if (rn === 'TrackOrder') {
                        return focused ?
                            <Text style={{ color: "#2D75FF", fontSize: 15, }}>{rn}</Text>
                            : <Text style={{ color: "#808080", fontSize: 15, }}>{rn}</Text>;
                    } else if (rn === 'MyDevice') {
                        return focused ?
                            <Text style={{ color: "#2D75FF", fontSize: 15, }}>{rn}</Text>
                            : <Text style={{ color: "#808080", fontSize: 15, }}>{rn}</Text>;
                    }
                },
                tabBarStyle: {
                    height: 60,
                    paddingTop: 10,
                    paddingBottom: 5,
                },
                tabBarIconStyle: {
                }
            })}
        >
            <Tab.Screen options={{ headerShown: false }} name='Home' component={ConnectToWifi} />
            <Tab.Screen options={{ headerShown: false }} name='TrackOrder' component={TrackOrder} />
            <Tab.Screen options={{ headerShown: false }} name='MyDevice' component={MyDevice} />
        </Tab.Navigator>
    )
}

export default TabNavigation