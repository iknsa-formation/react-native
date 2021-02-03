// ./App.js
import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductsListScreen from './screens/ProductsListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NetStatusBanner from './components/NetStatusBanner';
import WelcomeScreen from './screens/WelcomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const ProductsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={ProductsListScreen} />
    <Stack.Screen name="Product details" component={ProductDetailsScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Auth" component={WelcomeScreen} />
    <Tab.Screen name="Products" component={ProductsNavigator} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NetStatusBanner />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    flex: 1,
    backgroundColor: 'white'
  },
});
