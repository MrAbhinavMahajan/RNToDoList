import React, {memo, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {COLORS} from '../../utilities/Colors';
import {isiOS} from '../../utilities/Constants';
import Messages from '../../utilities/Messages';
import {styles} from './Styles';

const TaskAdder = ({setter}) => {
  const [toDoItem, setToDoItem] = useState();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={isiOS ? 'padding' : 'height'}
        style={styles.taskInputWrapper}>
        <TextInput
          style={styles.taskInputInfo}
          placeholder="Write a task?"
          value={toDoItem}
          onChangeText={setToDoItem}
        />
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
        underlayColor={COLORS.basic500}
        style={styles.taskIconWrapper}>
        <Text style={styles.taskIcon}>+</Text>
      </TouchableHighlight>
    </View>
  );
};

export default memo(TaskAdder);
