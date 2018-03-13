import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class TimerView extends Component {

  // timerStyle = () => {
  //   return {
  //     flex: this.props.timer,
  //     backgroundColor: 'orange'
  //   }
  // }

  render() {
    return (
      <View style={styles.timerWrapper}>
        {/* <View style={this.timerStyle()}></View> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  timerWrapper: {
    flex: .2,
    backgroundColor: 'red',
    flexDirection: 'row'
  }
})