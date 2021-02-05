// ./App.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NetStatusBanner from './components/NetStatusBanner';
import TabNavigator from './navigation/TabNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import security from './utility/security'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isReady, setIsReady] = useState(false)

  useEffect(() => { getIsAuthenticated() }, []);

  const getIsAuthenticated = async () => {
    const data = await security.isAuthenticated();
    setIsAuthenticated(data);
    return { isAuthenticated: true }
  };

  if (!isReady) {
    return <AppLoading
      startAsync={getIsAuthenticated}
      onFinish={() => setIsReady(true)}
      onError={console.error}
    />
  }

  return (
    <SafeAreaView style={styles.container}>
      <NetStatusBanner />
      <NavigationContainer>
        {isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
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
