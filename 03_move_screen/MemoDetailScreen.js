import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MemoDetailScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <Text style={styles.memoHeaderTitle}>じゃがいも</Text>
            <Text style={styles.memoHeaderDate}>2018/03/09</Text>
          </View>
        </View>
      
        <View style={styles.memoContent}>
          <Text>
            帰りによって買ってかえってください
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default MemoDetailScreen;
