/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo, useCallback} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {COLORS} from '../../utilities/Colors';
import {styles} from './Styles';

const Task = ({task, index, removeTask}) => {
  const removeTaskItem = useCallback(() => {
    removeTask(index);
  }, [removeTask]);

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => (
          <View style={styles.rightSwipeableAction}>
            <Text style={styles.rightSwipeableTitle}>Delete</Text>
          </View>
        )}
        onSwipeableRightOpen={removeTaskItem}>
        <TouchableHighlight
          onPress={removeTaskItem}
          style={styles.taskPressable}
          underlayColor={COLORS.basic600}>
          <View style={styles.taskWrapper}>
            <View style={styles.taskIcon} />
            <Text style={styles.taskInfo}>{task}</Text>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default memo(Task);
