import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Point extends Component {
  render() {
    return (
      <View style={styles.pointView}></View>
    )
  }
}

const styles = StyleSheet.create({
  pointView: {
    flex: 1.5,
    backgroundColor: 'white'
  }
});