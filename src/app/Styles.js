import {StatusBar, StyleSheet} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../utilities/Colors';
import {appThemeColor, isAndroid} from '../utilities/Constants';
import {horizontalGap, verticalGap} from '../utilities/GlobalStyles';

export const APP_STYLES = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    paddingTop: isAndroid && hasNotch ? StatusBar.currentHeight : 0,
    backgroundColor: appThemeColor,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalGap,
  },
  headerTitle: {
    fontSize: moderateScale(40),
    fontWeight: '600',
    color: COLORS.info200,
    textTransform: 'capitalize',
  },
  headerCount: {
    fontSize: moderateScale(40),
    fontWeight: '600',
    color: COLORS.danger600,
    flexShrink: -1,
    marginLeft: horizontalGap,
  },
  emptyListWrapper: {
    backgroundColor: COLORS.info200,
    borderRadius: moderateScale(10),
    padding: scale(12),
  },
  emptyListInfo: {
    textTransform: 'capitalize',
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
});
