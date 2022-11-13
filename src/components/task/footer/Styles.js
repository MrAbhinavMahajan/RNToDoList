import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../../utilities/Colors';
import {
  appThemeColor,
  footerHeight,
  horizontalGap,
} from '../../../utilities/Constants';
import {GLOBAL_STYLES} from '../../../utilities/Styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: footerHeight,
  },
  taskInputAnimatableWrapper: {
    flex: 1,
    marginRight: horizontalGap,
  },
  taskInputWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: scale(30),
    paddingHorizontal: horizontalGap,
  },
  taskInputInfo: {
    flex: 1,
    fontSize: moderateScale(15),
  },
  taskIconWrapper: {
    height: '100%',
    aspectRatio: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...GLOBAL_STYLES.circle,
  },
  taskIcon: {
    position: 'absolute',
    zIndex: 1,
    fontSize: moderateScale(25),
    fontWeight: '400',
    color: appThemeColor,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
