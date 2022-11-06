/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import Task from '../components/task/Task';
import TaskAdder from '../components/taskAdder/TaskAdder';
import {COLORS} from '../utilities/Colors';
import {
  appThemeColor,
  hasNotch,
  isAndroid,
  storageKeys,
} from '../utilities/Constants';
import {
  footerHeight,
  GLOBAL_STYLES,
  verticalGap,
} from '../utilities/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  isJSONParsable,
  saveDataToLocalStorage,
} from '../utilities/GlobalFunctions';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

const renderTaskItem = (item, index, removeTask) => (
  <Task task={item.task} index={index} removeTask={removeTask} />
);

const App = () => {
  const [toDoListData, setToDoListData] = useState();
  const [loading, setLoading] = useState(true);
  const footerVisibility = useSharedValue(1);
  const handler = useAnimatedScrollHandler({
    onScroll: event => {
      const y = event.contentOffset.y;
      if (y < 10) {
        // here we should have the footer opened
        footerVisibility.value = withTiming(1);
      } else {
        // close the footer
        footerVisibility.value = withTiming(0);
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

  const ListEmptyComponent = (
    <View style={STYLES.emptyListWrapper}>
      <Text style={STYLES.emptyListInfo}>No task added yet!</Text>
    </View>
  );

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
    <SafeAreaView style={STYLES.safeAreaWrapper}>
      <Animated.View style={[GLOBAL_STYLES.container]}>
        <Text style={STYLES.headerTitleInfo}>To do's</Text>
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

        <TaskAdder
          setter={handleAddTask}
          animatedStyles={animatedFooterStyle}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const STYLES = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    paddingTop: isAndroid && hasNotch ? StatusBar.currentHeight : 0,
    backgroundColor: appThemeColor,
  },
  headerTitle: {
    marginBottom: verticalGap,
  },
  headerTitleInfo: {
    textTransform: 'capitalize',
    fontSize: moderateScale(30),
    fontWeight: '600',
    color: COLORS.info200,
    marginBottom: verticalGap,
  },
  emptyListWrapper: {
    backgroundColor: COLORS.info200,
    borderRadius: moderateScale(10),
    padding: scale(12),
  },
  emptyListInfo: {
    textTransform: 'capitalize',
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
});

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
