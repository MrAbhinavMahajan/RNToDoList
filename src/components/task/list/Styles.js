import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../../utilities/Colors';

export const styles = StyleSheet.create({
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
