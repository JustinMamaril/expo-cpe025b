import { View, Text, StyleSheet } from 'react-native';

function AppHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerEyebrow}>CPE025B</Text>
      <Text style={styles.headerTitle}>Course Goals</Text>
      <Text style={styles.headerSubtitle}>
        Track what you want to achieve this semester.
      </Text>
    </View>
  );
}

const CREAM = '#E8DFD0';
const CREAM_MUTED = '#9A8F82';
const SAGE = '#7A9E87';

const styles = StyleSheet.create({
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
});

export default AppHeader;