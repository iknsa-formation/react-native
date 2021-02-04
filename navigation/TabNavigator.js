// /navigation/TabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from './AuthNavigator';
import ProductsNavigator from './ProductsNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={AuthNavigator} />
    <Tab.Screen name="Products" component={ProductsNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
);

export default TabNavigator;
