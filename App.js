// ./App.js
import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar, View, Text } from 'react-native';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductsListScreen from './screens/ProductsListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NetStatusBanner from './components/NetStatusBanner';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const WelcomeScreen = () => <View><Text>Auth section</Text></View>
const ProductScreen = () => <View><Text>Product section</Text></View>
const AccountScreen = () => <View><Text>Profile section</Text></View>

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={ProductsListScreen} />
    <Stack.Screen name="Product details" component={ProductDetailsScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Auth" component={WelcomeScreen} />
    <Tab.Screen name="Products" component={ProductScreen} />
    <Tab.Screen name="Profile" component={AccountScreen} />
  </Tab.Navigator>);

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
