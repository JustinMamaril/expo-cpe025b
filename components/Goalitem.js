import { View, Text, StyleSheet } from 'react-native';

const NAVY_CARD = '#162338';
const NAVY_BORDER = '#243450';
const CREAM = '#E8DFD0';
const SAGE = '#7A9E87';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <View style={styles.goalIndex}>
        <Text style={styles.goalIndexText}>
          {String(props.index + 1).padStart(2, '0')}
        </Text>
      </View>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default GoalItem;