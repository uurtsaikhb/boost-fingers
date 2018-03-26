import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class TouchArea extends Component {
  render() {
    let { onScoreHandler } = this.props;

    return (
      <View style={styles.touchView}>
        <TouchableOpacity
          style={styles.touchOpacity}
          onPress={onScoreHandler}
        >
          <Image
            source={require('../assets/images/finger-print.png')}
            style={styles.image} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  touchView: {
    flex: 4,
    backgroundColor: '#353B48'
  },
  touchOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    flex: 0.9,
    height: null,
    resizeMode: 'contain',
    opacity: 0.4
  }
});