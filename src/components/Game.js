import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, AsyncStorage } from 'react-native';

import Modal from 'react-native-root-modal';

import TimerView from './Timer';
import TouchArea from './TouchArea';
import Actions from './Actions';
import Point from './Point';
import GameOver from './GameOver';

const BEST_SCORE_KEY = 'BEST_SCORE_KEY';

export default class Splash extends Component {
  timerInterval;

  state = {
    score: 0,
    bestScore: 0,
    timer: 0,
    running: false,
    finished: false,
    modalVisible: false,
    modalOpacity: new Animated.Value(0)
  };

  componentWillMount = async () => {
    try {
      const bestScore = await AsyncStorage.getItem(BEST_SCORE_KEY);
      if (bestScore) {
        this.setState({ bestScore });
      }
    } catch (error) {
      // do nothing
    }
  };

  render() {
    const { score, bestScore, timer, modalVisible, modalOpacity } = this.state;

    return (
      <View style={styles.container}>
        <Modal visible={modalVisible} style={styles.modal}>
          <GameOver
            opacity={modalOpacity}
            bestScore={bestScore}
            currentScore={score}
            handlerPlayAgain={this.handlerPlayAgain.bind(this)}
          />
        </Modal>

        <TimerView timer={timer} />

        <Point score={score} />

        <TouchArea onScoreHandler={this.onScoreHandler.bind(this)} />

        <Actions onRestartHandler={this.onRestartHandler.bind(this)} />
      </View>
    );
  }

  /**
   * handler for starting new game
   * after one finishes
   */
  handlerPlayAgain = () => {
    const { modalOpacity } = this.state;
    Animated.spring(modalOpacity, { toValue: 0 }).start();
    this.setState({
      modalVisible: false
    });
    this.resetGame();
  };

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
  };

  /**
   * handles restart and
   * reset score, timer and other variables
   */
  onRestartHandler = () => {
    this.resetGame();
  };

  /**
   * starts game
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
  };

  /**
   * Finishes game
   */
  finishGame = async () => {
    this.stopTimer();
    this.setState({
      running: false,
      finished: true,
      modalVisible: true
    });

    try {
      if (this.state.score > this.state.bestScore) {
        this.setState({
          bestScore: this.state.score
        });
        await AsyncStorage.setItem(BEST_SCORE_KEY, this.state.score.toString());
      }
    } catch (error) {
      // do nothing
    }

    const { modalOpacity } = this.state;
    Animated.spring(modalOpacity, { toValue: 1 }).start();
  };

  /**
   * Reset game status
   */
  resetGame = () => {
    this.stopTimer();
    this.setState({
      score: 0,
      timer: 0,
      running: false,
      finished: false
    });
  };

  stopTimer = () => {
    clearImmediate(this.timerInterval);
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B48',
    flex: 1
  },
  modal: {
    ...StyleSheet.absoluteFillObject
  }
});
