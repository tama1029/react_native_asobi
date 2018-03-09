import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

// You can import from local files
import AssetExample from './components/AssetExample';
import BodyText from './elements/BodyText';
import MemoListScreen from './screens/MemoListScreen';
import MemoDetailScreen from './screens/MemoDetailScreen';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

const App = StackNavigator({
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
},{
    navigationOptions: { 
      headerTitle: 'Memo',
      headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff'
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default App;
