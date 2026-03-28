import { View, Text, FlatList, StyleSheet } from 'react-native';
import GoalItem from './Goalitem';

function GoalList(props) {
  return (
    <View style={styles.listWrapper}>
      <View style={styles.goalsHeaderRow}>
        <Text style={styles.goalsLabel}>Goals</Text>
        <Text style={styles.goalsCount}>{props.goals.length}</Text>
      </View>

      <View style={styles.divider} />

      <FlatList
        style={styles.goalsContainer}
        data={props.goals}
        renderItem={(itemData) => (
          <GoalItem text={itemData.item.text} index={itemData.index} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No goals added yet.</Text>
        }
      />
    </View>
  );
}

const NAVY_BORDER = '#243450';
const CREAM_MUTED = '#9A8F82';
const SAGE = '#7A9E87';

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
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
  divider: {
    height: 1,
    backgroundColor: NAVY_BORDER,
    marginBottom: 16,
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
});

export default GoalList;