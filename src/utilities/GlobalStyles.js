import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appThemeColor} from './Constants';

export const horizontalGap = scale(16);

export const verticalGap = scale(18);

export const GLOBAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalGap,
  },
  alignRow: {
    flexDirection: 'row',
  },
  alignInsetsCenter: (isRowAligned = false) =>
    isRowAligned ? {alignItems: 'center'} : {justifyContent: 'center'},
  alignInsetsTotallyCenter: {justifyContent: 'center', alignItems: 'center'},
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: appThemeColor,
  },
});
