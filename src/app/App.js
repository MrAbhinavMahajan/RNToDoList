/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
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
import {GLOBAL_STYLES, verticalGap} from '../utilities/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  isJSONParsable,
  saveDataToLocalStorage,
} from '../utilities/GlobalFunctions';

const renderTaskItem = (item, index, removeTask) => (
  <Task task={item.task} index={index} removeTask={removeTask} />
);

const App = () => {
  const [toDoListData, setToDoListData] = useState();
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  const ListEmptyComponent = useCallback(
    () => (
      <View style={STYLES.emptyListWrapper}>
        <Text style={STYLES.emptyListInfo}>No task added yet!</Text>
      </View>
    ),
    [],
  );

  const retrieveDataFromLocal = useCallback(async () => {
    let toDoListData = await AsyncStorage.getItem(storageKeys.toDoListData);
    if (isJSONParsable(toDoListData)) {
      toDoListData = JSON.parse(toDoListData);
      Promise.all([
        setToDoListData(toDoListData),
        setLoading(false),
        setStatus(true),
      ]);
    } else {
      setLoading(false);
      setStatus(true);
    }
  }, []);

  const handleAddTask = item =>
    setToDoListData([...(toDoListData ?? []), {task: item}]);

  const handleRemoveTask = removeIndex =>
    setToDoListData(
      toDoListData?.filter((element, index) => index !== removeIndex),
    );

  useEffect(() => {
    retrieveDataFromLocal();
  }, []);

  useEffect(() => {
    status && saveDataToLocalStorage(toDoListData);
  }, [toDoListData]);

  if (loading) {
    return <ActivityIndicator style={GLOBAL_STYLES.loaderWrapper} />;
  }

  return (
    <SafeAreaView style={STYLES.safeAreaWrapper}>
      <View style={[GLOBAL_STYLES.container]}>
        <Text style={STYLES.headerTitleInfo}>To do's</Text>
        <FlatList
          data={toDoListData ?? []}
          renderItem={({item, index}) =>
            renderTaskItem(item, index, handleRemoveTask)
          }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ListEmptyComponent}
          keyExtractor={(item, index) => index?.toString()}
        />
        <TaskAdder setter={handleAddTask} />
      </View>
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
