import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../utilities/Colors';
import {verticalGap} from '../../utilities/GlobalStyles';

export const styles = StyleSheet.create({
  taskPressable: {
    backgroundColor: COLORS.basic100,
    marginBottom: verticalGap,
    padding: scale(12),
    borderRadius: scale(10),
  },
  taskWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskInfo: {fontSize: moderateScale(15)},
  taskIcon: {
    backgroundColor: COLORS.info300,
    width: scale(20),
    aspectRatio: 1,
    borderRadius: scale(4),
    marginRight: scale(12),
  },
});
