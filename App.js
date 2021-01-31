// ./App.js
import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ProductDetails />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
});
