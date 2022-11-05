import React, {memo} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {COLORS} from '../../utilities/Colors';
import {styles} from './Styles';

const Task = ({task, index, removeTask}) => (
  <GestureHandlerRootView>
    <Swipeable
      renderRightActions={() => (
        <TouchableHighlight
          onPress={() => {
            removeTask(index);
          }}
          style={styles.rightSwipeableAction}
          underlayColor={COLORS.warning500}>
          <Text style={styles.rightSwipeableTitle}>Delete</Text>
        </TouchableHighlight>
      )}>
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
    </Swipeable>
  </GestureHandlerRootView>
);

export default memo(Task);
