// /navigation/ProfileNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import EditProfileScreen from '../screens/EditProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={ProfileScreen} />
    <Stack.Screen name="Product details" component={EditProfileScreen} />
  </Stack.Navigator>
);

export default ProfileNavigator;
