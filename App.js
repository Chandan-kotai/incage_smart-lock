
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  View
} from 'react-native';
import Splash from './src/screens/Splash';
import SplashSecond from './src/screens/SplashSecond';

const RootStack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='splash'>
        <RootStack.Screen options={{headerShown: false}} name="splash" component={Splash}/>
        <RootStack.Screen options={{headerShown: false}} name="splashscnd" component={SplashSecond}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
