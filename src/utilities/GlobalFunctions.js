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

// Debouncing enforces that a function won’t be called again until a certain amount of time has passed without it being called.
export const debounce = (func, delay) => {
  let debounceHandler;
  return function () {
    const context = this;
    const args = arguments;
    // arguments is an object which is local to a function. it's a local variable that is available with all functions by default except arrow functions in JavaScript.
    clearTimeout(debounceHandler);
    debounceHandler = setTimeout(() => func.apply(context, args), delay);
  };
};
