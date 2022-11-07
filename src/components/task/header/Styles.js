import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../../utilities/Colors';
import {horizontalGap, verticalGap} from '../../../utilities/Constants';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalGap,
  },
  title: {
    fontSize: moderateScale(40),
    fontWeight: '600',
    color: COLORS.info200,
    textTransform: 'capitalize',
  },
  counter: {
    fontSize: moderateScale(40),
    fontWeight: '600',
    color: COLORS.danger600,
    flexShrink: -1,
    marginLeft: horizontalGap,
  },
});
