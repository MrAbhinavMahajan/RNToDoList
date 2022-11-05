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
    const context = this,
      args = arguments;
    // arguments is an object which is local to a function. it's a local variable that is available with all functions by default except arrow functions in JavaScript.
    clearTimeout(debounceHandler);
    debounceHandler = setTimeout(() => func.apply(context, args), delay);
  };
};

// Throttling is a technique in which someFunction() is called only once in a specified time interval until the function-call-stream is over
let inThrottle, lastFn, lastTime;
export const throttle = (fn, wait) => {
  return function () {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
