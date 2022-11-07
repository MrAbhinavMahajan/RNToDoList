import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../utilities/Colors';
import {footerHeight, horizontalGap} from '../../utilities/Constants';
import {GLOBAL_STYLES} from '../../utilities/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: footerHeight,
  },
  taskInputWrapper: {
    flex: 1,
    marginRight: horizontalGap,
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
    fontSize: moderateScale(30),
    fontWeight: '400',
  },
});
