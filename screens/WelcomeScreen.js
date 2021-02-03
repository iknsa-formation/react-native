import React from 'react';
import { Button, Text, View } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  return (
    <View>
      <View>
        <Text>Hello React Native</Text>
      </View>
      <View>
        <Button title="Login" />
        <Button title="Register" />
      </View>
    </View>
  )
}

export default WelcomeScreen;