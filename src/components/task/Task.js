import React, {memo} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {COLORS} from '../../utilities/Colors';
import {styles} from './Styles';

const Task = ({task, index, removeTask}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        removeTask(index);
      }}
      style={styles.taskPressable}
      underlayColor={COLORS.basic600}>
      <View style={styles.taskWrapper}>
        <View style={styles.taskIcon} />
        <Text style={styles.taskInfo}>{task}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default memo(Task);
