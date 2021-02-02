// ./App.js
import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductsListScreen from './screens/ProductsListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NetStatusBanner from './components/NetStatusBanner';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NetStatusBanner />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsListScreen} />
          <Stack.Screen name="Product details" component={ProductDetailsScreen} />
        </Stack.Navigator>
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
