import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Actions extends Component {
  render() {
    return (
      <View style={styles.actionView}></View>
    )
  }
}

const styles = StyleSheet.create({
  actionView: {
    flex: 0.6,
    backgroundColor: 'orange'
  }
});