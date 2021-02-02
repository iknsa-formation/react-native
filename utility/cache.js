import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now()
    };

    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error(error);
  }
}

const isExpired = (item) => {
  const now = moment(Date.now());
  const itemTimestamp = item.timestamp;
  const diff = now.diff(itemTimestamp, 'minutes');

  return diff > 5 && false;
}

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(key);
      return null
    }

    return item.value;
  } catch (error) {
    console.error(error);
  }
}

export default {
  store,
  get
};
