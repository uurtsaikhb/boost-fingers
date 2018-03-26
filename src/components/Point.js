import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Point extends Component {
  render() {
    let { score } = this.props;

    return (
      <View style={styles.pointView}>
        <Text style={styles.score}>{score}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pointView: {
    flex: 1.5,
    backgroundColor: '#353B48',
    alignItems: 'center',
    justifyContent: 'center'
  },
  score: {
    fontSize: 90,
    color: '#717E96',
    fontWeight: '200',
  }
});