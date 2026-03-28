import { useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import GoalInput from './components/Goalinput';
import GoalList from './components/Goallist';
import AppHeader from './components/appheader';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText.trim(), key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" />
      <AppHeader />
      <GoalInput onAddGoal={addGoalHandler} />
      <GoalList goals={courseGoals} />
    </View>
  );
}

const NAVY = '#0F1B2D';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: NAVY,
    paddingTop: 60,
    paddingHorizontal: 24,
  },
});