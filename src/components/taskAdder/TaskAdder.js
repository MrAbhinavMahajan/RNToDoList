import React, {memo, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {COLORS} from '../../utilities/Colors';
import {isiOS} from '../../utilities/Constants';
import {debounce} from '../../utilities/GlobalFunctions';
import Messages from '../../utilities/Messages';
import {styles} from './Styles';

const TaskAdder = ({setter, animatedStyles}) => {
  const [toDoItem, setToDoItem] = useState();

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <KeyboardAvoidingView
        behavior={isiOS ? 'padding' : 'height'}
        style={styles.taskInputWrapper}>
        <TextInput
          style={styles.taskInputInfo}
          placeholder="Write a task?"
          autoFocus
          onChangeText={debounce(setToDoItem, 300)}>
          {toDoItem}
        </TextInput>
      </KeyboardAvoidingView>

      <TouchableHighlight
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
        <Text style={styles.taskIcon}>+</Text>
      </TouchableHighlight>
    </Animated.View>
  );
};

export default memo(TaskAdder);
