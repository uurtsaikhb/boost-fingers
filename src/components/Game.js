import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TimerView from './Timer';
import TouchArea from './TouchArea';
import Actions from './Actions';
import Point from './Point';

export default class Splash extends Component {
  state = {
    count: 0,
    timer: 0,
    running: false
  }


  render() {
    return (
      <View style={styles.container}>
        <TimerView />
        <Point />
        <TouchArea />
        <Actions />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00cec9',
    flex: 1,
  },
});