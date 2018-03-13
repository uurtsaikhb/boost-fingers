import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class TouchArea extends Component {
  render() {
    return (
      <View style={styles.touchView}></View>
    )
  }
}

const styles = StyleSheet.create({
  touchView: {
    flex: 4,
    backgroundColor: 'blue'
  }
});