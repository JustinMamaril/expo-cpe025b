import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText.trim(),
    ]);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" />

      <View style={styles.headerContainer}>
        <Text style={styles.headerEyebrow}>CPE025B</Text>
        <Text style={styles.headerTitle}>Course Goals</Text>
        <Text style={styles.headerSubtitle}>
          Track what you want to achieve this semester.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a new goal..."
          placeholderTextColor="#6B7A8D"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <TouchableOpacity
          style={[
            styles.addButton,
            enteredGoalText.trim().length === 0 && styles.addButtonDisabled,
          ]}
          onPress={addGoalHandler}
          activeOpacity={0.75}
        >
          <Text style={styles.addButtonText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={styles.goalsHeaderRow}>
        <Text style={styles.goalsLabel}>Goals</Text>
        <Text style={styles.goalsCount}>{courseGoals.length}</Text>
      </View>

      <ScrollView
        style={styles.goalsContainer}
        showsVerticalScrollIndicator={false}
      >
        {courseGoals.length === 0 && (
          <Text style={styles.emptyText}>No goals added yet.</Text>
        )}
        {courseGoals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <View style={styles.goalIndex}>
              <Text style={styles.goalIndexText}>
                {String(index + 1).padStart(2, '0')}
              </Text>
            </View>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const NAVY = '#0F1B2D';
const NAVY_CARD = '#162338';
const NAVY_BORDER = '#243450';
const CREAM = '#E8DFD0';
const CREAM_MUTED = '#9A8F82';
const SAGE = '#7A9E87';
const SAGE_DIM = '#4A6B55';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: NAVY,
    paddingTop: 60,
    paddingHorizontal: 24,
  },

  headerContainer: {
    marginBottom: 32,
  },
  headerEyebrow: {
    fontSize: 11,
    letterSpacing: 3,
    color: SAGE,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: CREAM,
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 13,
    color: CREAM_MUTED,
    lineHeight: 19,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 24,
  },
  textInput: {
    flex: 1,
    backgroundColor: NAVY_CARD,
    borderWidth: 1,
    borderColor: NAVY_BORDER,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 16,
    fontSize: 14,
    color: CREAM,
  },
  addButton: {
    backgroundColor: SAGE,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 18,
  },
  addButtonDisabled: {
    backgroundColor: SAGE_DIM,
    opacity: 0.5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: NAVY_BORDER,
    marginBottom: 16,
  },

  goalsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalsLabel: {
    fontSize: 11,
    letterSpacing: 3,
    color: SAGE,
    textTransform: 'uppercase',
  },
  goalsCount: {
    fontSize: 11,
    letterSpacing: 1,
    color: CREAM_MUTED,
  },

  goalsContainer: {
    flex: 1,
  },
  emptyText: {
    color: CREAM_MUTED,
    fontSize: 13,
    marginTop: 12,
    fontStyle: 'italic',
  },

  goalItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: NAVY_CARD,
    borderWidth: 1,
    borderColor: NAVY_BORDER,
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    gap: 14,
  },
  goalIndex: {
    width: 28,
    alignItems: 'center',
    paddingTop: 1,
  },
  goalIndexText: {
    fontSize: 11,
    color: SAGE,
    fontWeight: '600',
    letterSpacing: 1,
  },
  goalText: {
    flex: 1,
    fontSize: 14,
    color: CREAM,
    lineHeight: 20,
  },
});