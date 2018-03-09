import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>じゃがいも</Text>
          <Text style={styles.memoDate}>2018/03/09</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>にんじん</Text>
          <Text style={styles.memoDate}>2018/03/09</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>たまねぎ</Text>
          <Text style={styles.memoDate}>2018/03/09</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
})
export default MemoList;
