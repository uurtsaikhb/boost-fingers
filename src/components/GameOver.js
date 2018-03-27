import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity
} from 'react-native';

export default class GameOver extends Component {

  render() {

    const GAME_OVER = 'GAME OVER';
    const PLAY_AGAIN = 'PLAY AGAIN';

    const {
      opacity,
      handlerPlayAgain,
      bestScore,
      currentScore
    } = this.props;

    return (
      <Animated.View
        style={[{ opacity }, styles.modal]}>

        <View style={styles.scoreBoard}>
          <View style={styles.gameOver}>
            <Text style={styles.gameOverText}>
              {GAME_OVER}
            </Text>
          </View>

          <View style={styles.bestScore}>
            <Text style={styles.bestScoreText}>BEST SCORE</Text>
            <Text style={styles.bestScoreValue}>
              {bestScore}
            </Text>
          </View>

          <View style={styles.currentScore}>
            <Text style={styles.currentScoreText}>SCORE</Text>
            <Text style={styles.currentScoreValue}>
              {currentScore}
            </Text>
            <Text style={styles.share}>share on Facebook</Text>
          </View>

        </View>

        <View style={styles.playAgain}>
          <TouchableOpacity onPress={handlerPlayAgain}>
            <Text style={styles.playAgainText}>
              {PLAY_AGAIN}
            </Text>
          </TouchableOpacity>
        </View>

      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(16, 21, 27, 0.98)'
  },
  scoreBoard: {
    flex: 5.7,
  },
  gameOver: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bestScore: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bestScoreText: {
    color: '#5E6D81',
    fontSize: 20,
    fontWeight: '200',
  },
  bestScoreValue: {
    color: '#FF6D62',
    fontSize: 36,
    fontWeight: '300',
  },
  currentScore: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  currentScoreText: {
    color: '#5E6D81',
    fontSize: 20,
    fontWeight: '200',
  },
  currentScoreValue: {
    color: '#34608E',
    fontSize: 80,
    fontWeight: '300',
  },
  share: {
    color: '#5E6D81',
    fontSize: 16,
    fontWeight: '200',
  },
  gameOverText: {
    fontSize: 50,
    color: '#5E6D81',
    fontWeight: '200',
    fontFamily: 'Helvetica Neue',
  },
  playAgain: {
    flex: 0.6,
    backgroundColor: '#1B2025',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playAgainText: {
    color: '#5E6D81',
    fontSize: 24,
    fontWeight: '300',
  }
});