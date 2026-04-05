import { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
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

  const isDisabled = enteredGoalText.trim().length === 0;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a new goal..."
        placeholderTextColor="#6B7A8D"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />

      <Pressable
        onPress={addGoalHandler}

        onPressIn={() => console.log('Press started')}

        onPressOut={() => console.log('Press released')}

        onLongPress={() => console.log('Long press detected on Add button!')}

        delayLongPress={600}

        disabled={isDisabled}

        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}

        pressRetentionOffset={{ top: 20, bottom: 30, left: 20, right: 20 }}

        android_ripple={{ color: '#4A6B55', borderless: false }}

        style={({ pressed }) => [
          styles.addButton,
          isDisabled && styles.addButtonDisabled,
          pressed && !isDisabled && styles.addButtonPressed,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.addButtonText}>
            {pressed && !isDisabled ? 'Adding...' : '+ Add'}
          </Text>
        )}
      </Pressable>
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
  addButtonPressed: {
    backgroundColor: '#5C8A6A',
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default GoalInput;