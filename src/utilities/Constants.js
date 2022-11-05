import {Dimensions, Platform} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {COLORS} from './Colors';

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('window');

export const isAndroid = Platform.OS === 'android';

export const isiOS = Platform.OS === 'ios';

export const hasNotch = deviceInfoModule.hasNotch();

export const appThemeColor = COLORS.basic900;

export const storageKeys = {
  toDoListData: 'TO_DO_LIST_DATA',
};
