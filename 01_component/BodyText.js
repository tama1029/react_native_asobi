import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>hoge</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#111',
    backgroundColor: '#eee',
  },
});

export default BodyText;
