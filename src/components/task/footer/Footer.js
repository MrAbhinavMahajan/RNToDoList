import React, {useState} from 'react';
import {
  Animated,
  Alert,
  KeyboardAvoidingView,
  TouchableHighlight,
} from 'react-native';
import Reanimated from 'react-native-reanimated';
import {COLORS} from '../../../utilities/Colors';
import {isiOS} from '../../../utilities/Constants';
import {debounce} from '../../../utilities/Functions';
import Messages from '../../../utilities/Messages';
import {AppText, AppTextInput} from '../../Extensions';
import {styles} from './Styles';

const TaskListFooter = ({setter, animatedStyles}) => {
  const [toDoItem, setToDoItem] = useState();
  const animatedButtonScale = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 0.1,
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
    <Reanimated.View style={[styles.container, animatedStyles]}>
      <KeyboardAvoidingView
        behavior={isiOS ? 'padding' : 'height'}
        style={styles.taskInputWrapper}>
        <AppTextInput
          style={styles.taskInputInfo}
          placeholder="Write a task?"
          autoFocus
          onChangeText={debounce(setToDoItem, 300)}>
          {toDoItem}
        </AppTextInput>
      </KeyboardAvoidingView>

      <Animated.View style={[animatedScaleStyle]}>
        <TouchableHighlight
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={() => {
            if (toDoItem) {
              setter(toDoItem);
              setToDoItem();
            } else {
              Alert.alert(Messages.taskTitle, Messages.invalidTaskInfo);
            }
          }}
          style={styles.taskIconWrapper}
          underlayColor={COLORS.basic500}>
          <AppText style={styles.taskIcon}>+</AppText>
        </TouchableHighlight>
      </Animated.View>
    </Reanimated.View>
  );
};

export default TaskListFooter;
