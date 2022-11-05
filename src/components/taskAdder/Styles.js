import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../utilities/Colors';
import {horizontalGap, verticalGap} from '../../utilities/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalGap,
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
    backgroundColor: COLORS.white,
    borderRadius: scale(25),
    aspectRatio: 1,
    width: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskIcon: {
    fontSize: moderateScale(35),
    fontWeight: '400',
  },
});
