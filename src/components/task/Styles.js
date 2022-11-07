import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../utilities/Colors';
import {horizontalGap, verticalGap} from '../../utilities/Constants';

export const styles = StyleSheet.create({
  rightSwipeableAction: {
    backgroundColor: COLORS.darkYellow,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: verticalGap,
    paddingHorizontal: horizontalGap,
    borderTopEndRadius: scale(10),
    flex: 1,
  },
  rightSwipeableTitle: {
    fontSize: moderateScale(15),
    fontWeight: '600',
  },
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
  taskInfo: {
    fontSize: moderateScale(15),
    flexShrink: -1,
  },
  taskIcon: {
    backgroundColor: COLORS.info300,
    width: scale(20),
    aspectRatio: 1,
    borderRadius: scale(4),
    marginRight: scale(12),
  },
});
