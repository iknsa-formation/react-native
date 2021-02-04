// /navigation/ProductsNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import ProductsListScreen from '../screens/ProductsListScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const Stack = createStackNavigator();

const ProductsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={ProductsListScreen} />
    <Stack.Screen name="Product details" component={ProductDetailsScreen} />
  </Stack.Navigator>
);

export default ProductsNavigator;