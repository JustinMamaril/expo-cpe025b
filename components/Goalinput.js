import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
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
  );
}

const NAVY_CARD = '#162338';
const NAVY_BORDER = '#243450';
const CREAM = '#E8DFD0';
const SAGE = '#7A9E87';
const SAGE_DIM = '#4A6B55';

const styles = StyleSheet.create({
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
});

export default GoalInput;