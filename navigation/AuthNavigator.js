// /navigation/AuthNavigator.js

import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import DashboardScreen from '../screens/DashboardScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => setIsAuthenticated(getIsAuthenticated()), []);

  const getIsAuthenticated = async () => {
    return await security.isAuthenticated();
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={isAuthenticated ? DashboardScreen : WelcomeScreen}
        options={{ headerShown: isAuthenticated }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
};

export default AuthNavigator;
