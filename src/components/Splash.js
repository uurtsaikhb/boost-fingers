import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.splash} >
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Fast Fingers</Text>
        </View>
        <View style={styles.subTitleWrapper}>
          <Text style={styles.subtitle}>Powered by React Native © 2018</Text>
        </View>
      </ View>
    );
  }
}

const styles = StyleSheet.create({
  splash: {
    backgroundColor: '#FF6D62',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontWeight: '200'
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  subTitleWrapper: {
    paddingBottom: 20
  }
});