import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TimerView from './Timer';
import TouchArea from './TouchArea';
import Actions from './Actions';
import Point from './Point';

export default class Splash extends Component {
  timerInterval;

  state = {
    score: 0,
    timer: 0,
    running: false,
    finished: false
  }

  /**
   * start game
   */
  startGame = () => {
    this.setState({
      running: true,
      finished: false
    });

    this.timerInterval = setInterval(() => {
      if (this.state.timer > 1) {
        this.finishGame();
      } else {
        this.setState({
          timer: this.state.timer + 0.0015
        });
      }
    }, 1);

  }

  finishGame = () => {
    this.stopTimer();

    alert(this.state.score);

    this.setState({
      running: false,
      finished: true,
    });
  }
  /**
   * handler for actual game button,
   * increases score,
   * 
   * start game by first touch
   */
  onScoreHandler = () => {
    let { score, running } = this.state;

    // start game 
    if (!running) {
      this.startGame();
    }

    // increase score
    this.setState({
      score: ++score
    });
  }


  stopTimer = () => {
    clearImmediate(this.timerInterval);
  }

  /**
   * handles restart and 
   * reset score, timer and other variables
   */
  onRestartHandler = () => {
    this.setState({
      score: 0,
      timer: 0,
      running: false,
      finished: false
    });

    this.stopTimer();
  }

  render() {
    let { score, timer } = this.state;
    return (
      <View style={styles.container}>
        <TimerView timer={timer} />
        <Point score={score} />
        <TouchArea onScoreHandler={this.onScoreHandler.bind(this)} />
        <Actions onRestartHandler={this.onRestartHandler.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B48',
    flex: 1,
  },
});