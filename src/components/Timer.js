import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class TimerView extends Component {

  timerStyle = () => {
    let { timer } = this.props;
    return {
      flex: timer,
      backgroundColor: '#FF6D62'
    }
  }

  render() {
    return (
      <View style={styles.timerWrapper}>
        <View style={this.timerStyle()}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  timerWrapper: {
    flex: 0.2,
    backgroundColor: '#4D525C',
    flexDirection: 'row'
  }
})