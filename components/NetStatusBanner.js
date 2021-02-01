import React from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { Text, View } from 'react-native';


const NetStatusBanner = () => {
  const netInfo = useNetInfo();


  return (
    netInfo.isInternetReachable ? null :
      <View style={{ height: 50, backgroundColor: 'crimson', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff' }}>No internet access</Text>
      </View>
  )
}

export default NetStatusBanner;