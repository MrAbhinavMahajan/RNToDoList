/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {storageKeys, footerHeight, verticalGap} from '../utilities/Constants';
import {GLOBAL_STYLES} from '../utilities/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {isJSONParsable, saveDataToLocalStorage} from '../utilities/Functions';
import {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
import {APP_STYLES} from './Styles';
import TaskListHeader from '../components/task/header/Header';
import TaskListFooter from '../components/task/footer/Footer';
import {Tasklist} from '../components/task/list/Tasklist';

const App = () => {
  const [toDoListData, setToDoListData] = useState([]);
  const [loading, setLoading] = useState(true);

  const footerVisibility = useSharedValue(1);
  const handler = useAnimatedScrollHandler({
    onScroll: event => {
      const y = event.contentOffset.y;
      if (y < 10) {
        // here we should have the footer opened
        footerVisibility.value = withSpring(1);
      } else {
        // close the footer
        footerVisibility.value = withSpring(0);
      }
    },
  });

  const animatedFooterStyle = useAnimatedStyle(() => ({
    opacity: footerVisibility.value,
    marginTop: interpolate(
      footerVisibility.value,
      [0, 1],
      [-footerHeight, verticalGap],
    ),
    marginBottom: interpolate(footerVisibility.value, [0, 1], [0, verticalGap]),
  }));

  const retrieveDataFromLocal = useCallback(async () => {
    let toDoListData = await AsyncStorage.getItem(storageKeys.toDoListData);
    if (isJSONParsable(toDoListData)) {
      toDoListData = await JSON.parse(toDoListData);
      Promise.all([setToDoListData(toDoListData), setLoading(false)]);
    } else {
      setLoading(false);
    }
  }, []);

  const handleAddTask = useCallback(
    item => setToDoListData([{task: item?.trim()}, ...(toDoListData ?? [])]),
    [toDoListData],
  );

  const handleRemoveTask = useCallback(
    removeIndex =>
      setToDoListData(
        toDoListData?.filter((element, index) => index !== removeIndex),
      ),
    [toDoListData],
  );

  useEffect(() => {
    retrieveDataFromLocal();
  }, []);

  useEffect(() => {
    !!toDoListData && saveDataToLocalStorage(toDoListData);
  }, [toDoListData]);

  if (loading) {
    return <ActivityIndicator style={GLOBAL_STYLES.loaderWrapper} />;
  }

  return (
    <SafeAreaView style={APP_STYLES.safeAreaWrapper}>
      <View style={[GLOBAL_STYLES.container]}>
        <TaskListHeader total={toDoListData?.length} />

        <Tasklist
          toDoListData={toDoListData}
          handleRemoveTask={handleRemoveTask}
          handler={handler}
        />

        <TaskListFooter
          setter={handleAddTask}
          animatedStyles={animatedFooterStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

/**
#Notes:-
* In case if we're using useSharedValue then useAnimatedStyle should return a function not directly the object

#Interpolation
  1.  Takes 3 arguments
  2.  first will be the value for interpolation
  3.  Second will be the input range for interpolation
  4.  Third will be the values range for interpolation as per input range
*/
