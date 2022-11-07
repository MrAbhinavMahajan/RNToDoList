import {StyleSheet} from 'react-native';
import {appThemeColor, horizontalGap} from './Constants';

export const GLOBAL_STYLES = StyleSheet.create({
  circle: {
    borderRadius: 1000,
  },
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
