import React, {memo} from 'react';
import {View} from 'react-native';
import {AppText} from '../../Extensions';
import {styles} from './Styles';

const TaskListHeader = ({total}) => (
  <View style={styles.wrapper}>
    <AppText style={styles.title}>To dos</AppText>
    <AppText style={styles.counter}>{total}</AppText>
  </View>
);

export default memo(TaskListHeader);
