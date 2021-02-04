import AsyncStorage from '@react-native-async-storage/async-storage';

const setInStore = async () => {
  await AsyncStorage.setItem('security', JSON.stringify({ name: 'Khalid' }));
}
setInStore();

const isAuthenticated = async () => {
  const data = await AsyncStorage.getItem('security');
  data === null ? console.log('null') : JSON.parse(data);

  return data && true;
}

export default security = {
  setInStore,
  isAuthenticated
}
