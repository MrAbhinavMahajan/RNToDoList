import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import {AppText} from '../../Extensions';
import {TaskCard} from '../card/Task';
import {styles} from './Styles';

const ListEmptyComponent = () => (
  <View style={styles.emptyListWrapper}>
    <AppText style={styles.emptyListInfo}>No task added yet!</AppText>
  </View>
);

export const Tasklist = ({toDoListData, handleRemoveTask, handler}) => {
  const renderTaskItem = (item, index, removeTask) => (
    <TaskCard task={item.task} index={index} removeTask={removeTask} />
  );

  return (
    <Animated.FlatList
      data={toDoListData ?? []}
      renderItem={({item, index}) =>
        renderTaskItem(item, index, handleRemoveTask)
      }
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={(item, index) => {
        return `KEY_${index}_${Date.now()}`;
      }}
      onScroll={handler}
      scrollEventThrottle={1000 / 60}
      // scrollEventThrottle, 60 frames every second the handler will be called
    />
  );
};
