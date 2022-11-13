/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo, useCallback} from 'react';
import {View, TouchableHighlight, Animated} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {COLORS} from '../../../utilities/Colors';
import {AppText} from '../../Extensions';
import {styles} from './Styles';

export const TaskCard = memo(({task, index, removeTask}) => {
  const removeTaskItem = useCallback(() => {
    removeTask(index);
  }, [removeTask]);

  const animatedButtonScale = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedScaleStyle = {
    transform: [{scale: animatedButtonScale}],
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => (
          <View style={styles.rightSwipeableAction}>
            <AppText style={styles.rightSwipeableTitle}>Delete</AppText>
          </View>
        )}
        onSwipeableRightOpen={removeTaskItem}>
        <Animated.View style={[animatedScaleStyle]}>
          <TouchableHighlight
            onPress={removeTaskItem}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            style={styles.taskPressable}
            underlayColor={COLORS.basic600}>
            <View style={styles.taskWrapper}>
              <View style={styles.taskIcon} />
              <AppText style={styles.taskInfo}>{task}</AppText>
            </View>
          </TouchableHighlight>
        </Animated.View>
      </Swipeable>
    </GestureHandlerRootView>
  );
});
