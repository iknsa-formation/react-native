// ./App.js
import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import ProductsList from './components/ProductsList';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ProductsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
});
