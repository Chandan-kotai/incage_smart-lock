
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  View
} from 'react-native';
import TabNavigation from './src/screens/bottom_nav/TabNavigation';
import Splash from './src/screens/Splash';
import SplashSecond from './src/screens/SplashSecond';
import Login from './src/screens/stack_nav/Login';
import Register from './src/screens/stack_nav/Register';

const RootStack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='splash'>
        {/* <RootStack.Screen options={{headerShown: false}} name="splash" component={Splash}/>
        <RootStack.Screen options={{headerShown: false}} name="splashscnd" component={SplashSecond}/>
        <RootStack.Screen options={{headerShown: false}} name="signin" component={Login}/>
        <RootStack.Screen options={{headerShown: false}} name="register" component={Register}/> */}
        <RootStack.Screen options={{headerShown: false}} name="tabnav" component={TabNavigation}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
