import {StatusBar, StyleSheet} from 'react-native';
import {appThemeColor, isAndroid, hasNotch} from '../utilities/Constants';

export const APP_STYLES = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    paddingTop: isAndroid && hasNotch ? StatusBar.currentHeight : 0,
    backgroundColor: appThemeColor,
  },
});
