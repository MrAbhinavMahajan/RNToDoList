import {Dimensions, Platform} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLORS} from './Colors';

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('window');

export const isAndroid = Platform.OS === 'android';

export const isiOS = Platform.OS === 'ios';

export const hasNotch = deviceInfoModule.hasNotch();

export const storageKeys = {
  toDoListData: 'TO_DO_LIST_DATA',
};

export const appThemeColor = COLORS.basic900;

export const appTextColor = COLORS.black;

export const placeholderColor = COLORS.basic600;

export const footerHeight = verticalScale(45);

export const horizontalGap = scale(16);

export const verticalGap = scale(18);
