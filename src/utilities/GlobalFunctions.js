import AsyncStorage from '@react-native-async-storage/async-storage';
import {storageKeys} from './Constants';

export const isJSONParsable = data => {
  try {
    JSON.parse(data);
  } catch (error) {
    return false;
  }
  return true;
};

export const saveDataToLocalStorage = async toDoListData => {
  if (toDoListData) {
    toDoListData = JSON.stringify(toDoListData);
    await AsyncStorage.setItem(storageKeys.toDoListData, toDoListData);
  }
};
