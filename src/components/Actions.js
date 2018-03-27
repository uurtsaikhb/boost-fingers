import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Actions extends Component {
  render() {
    let buttonText = 'RESTART';
    let { onRestartHandler } = this.props;

    return (
      <View
        style={styles.button}>
        <TouchableOpacity
          onPress={onRestartHandler}>
          <Text style={styles.buttonText}>
            {buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 0.6,
    backgroundColor: '#FF6D62',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '300',
  }
});