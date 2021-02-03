import AsyncStorage from "@react-native-async-storage/async-storage";

const setInStore = async (key, value) => {
  try {
    const item = {
      value: value,
      timestamp: Date.now()
    };

    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error(error);
  }
}

const isExpired = (item) => {
  const now = moment(Date.now());
  const diff = now.diff(item.timestamp, 'minutes');

  return diff > 1;
}

const getFromStore = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);

    const item = JSON.parse(data);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(key)

      return null;
    }

    return item.value;
  } catch (error) {
    console.error(error);
  }
}

export default {
  setInStore,
  getFromStore
}