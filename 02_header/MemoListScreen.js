import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MemoList from '../components/MemoList';

class MemoListScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <MemoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default MemoListScreen;
