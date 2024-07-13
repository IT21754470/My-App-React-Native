// In App.js in a new project

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/loginscreen';
import SignUpScreen from './screens/signupscreen';
import HomeScreen from './screens/home';
import LogoutScreen from './screens/logout';
import ListScreen from './screens/listscreen';
import {AuthProvider} from './screens/auth'
import VoiceToTextScreen from './screens/voiceTextScreen';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="voice" component={VoiceToTextScreen}/>
    
        <Stack.Screen name="logout" component={LogoutScreen} />

        <Stack.Screen name="list" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}

export default App;