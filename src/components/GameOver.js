import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity
} from 'react-native';

// import { Toast } from 'native-base';

const FBSDK = require('react-native-fbsdk');
const { ShareDialog, LoginManager, LoginButton, ShareButton } = FBSDK;

export default class GameOver extends Component {
  state = {
    showToast: false,
    toastOpacity: new Animated.Value(0),
    toastTextColor: '#01a3a4',
    toastText: 'Posted!',
    shareButtonOpacity: new Animated.Value(1)
  };
  // _facebookAuth = () => {
  //   LoginManager.logInWithReadPermissions(['public_profile']).then(
  //     result => {
  //       if (result.isCancelled) {
  //         console.log('login cancelled');
  //       } else {
  //         console.log('login is success: ' + result.grantedPermissions);
  //       }
  //     },
  //     error => {
  //       console.log('error occurred');
  //     }
  //   );
  // };

  _shareResultOnFacebook = score => {
    shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://itunes.apple.com/us/app/ais-mongolia/id1274917736', // need to change with correct url
      quote: `Can you beat me? I have got ${score}.`
    };

    ShareDialog.canShow(shareLinkContent)
      .then(canShow => {
        if (canShow) {
          return ShareDialog.show(shareLinkContent);
        }
      })
      .then(
        result => {
          if (result.isCancelled) {
            this.setState({
              toastTextColor: '#ff9f43',
              toastText: 'Cancelled!'
            });
          } else {
            this.setState({
              toastText: 'Posted!'
            });
          }

          this._displayToast();
        },
        error => {
          this.setState({
            toastTextColor: '#ff6b6b',
            toastText: 'Error occurred!'
          });

          this._displayToast();
        }
      );
  };

  _displayToast = () => {
    setTimeout(() => {
      Animated.sequence([
        Animated.spring(this.state.toastOpacity, { toValue: 1 }),
        Animated.spring(this.state.toastOpacity, { toValue: 0 })
      ]).start();
    }, 1000);
  };

  render() {
    const GAME_OVER = 'GAME OVER';
    const PLAY_AGAIN = 'PLAY AGAIN';

    const { opacity, handlerPlayAgain, bestScore, currentScore } = this.props;
    const { shareButtonOpacity } = this.state;

    return (
      <Animated.View style={[{ opacity }, styles.modal]}>
        <View style={styles.scoreBoard}>
          <View style={styles.gameOver}>
            <Text style={styles.gameOverText}>{GAME_OVER}</Text>
          </View>

          <View style={styles.bestScore}>
            <Text style={styles.bestScoreText}>BEST SCORE</Text>
            <Text style={styles.bestScoreValue}>{bestScore}</Text>
          </View>

          <View style={styles.currentScore}>
            <Text style={styles.currentScoreText}>SCORE</Text>
            <Text style={styles.currentScoreValue}>{currentScore}</Text>

            <TouchableOpacity
              onPress={this._shareResultOnFacebook.bind(this, currentScore)}
            >
              <Animated.Text
                style={[styles.share, { opacity: shareButtonOpacity }]}
              >
                Post your score on Facebook
              </Animated.Text>
            </TouchableOpacity>

            <Animated.View
              style={[styles.toast, { opacity: this.state.toastOpacity }]}
            >
              <Text
                style={[styles.toastText, { color: this.state.toastTextColor }]}
              >
                {this.state.toastText}
              </Text>
            </Animated.View>
            {/* <LoginButton
              publishPermissions={['publish_actions']}
              onLoginFinished={(error, result) => {
                if (error) {
                  console.log('login failed with error: ', result.error);
                } else if (result.isCancelled) {
                  console.log('login was cancelled');
                } else {
                  console.log('login was success: ', result.grantedPermissions);
                }
              }}
              onLogoutFinished={() => {
                console.log('user logged out');
              }}
            /> */}
          </View>
        </View>

        <View style={styles.playAgain}>
          <TouchableOpacity onPress={handlerPlayAgain}>
            <Text style={styles.playAgainText}>{PLAY_AGAIN}</Text>
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
    flex: 5.7
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
    fontWeight: '200'
  },
  bestScoreValue: {
    color: '#FF6D62',
    fontSize: 36,
    fontWeight: '300'
  },
  currentScore: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  currentScoreText: {
    color: '#5E6D81',
    fontSize: 20,
    fontWeight: '200'
  },
  currentScoreValue: {
    color: '#34608E',
    fontSize: 80,
    fontWeight: '300'
  },
  share: {
    color: '#5E6D81',
    fontSize: 16,
    fontWeight: '200'
  },
  gameOverText: {
    fontSize: 50,
    color: '#5E6D81',
    fontWeight: '200',
    fontFamily: 'Helvetica Neue'
  },
  playAgain: {
    flex: 0.6,
    backgroundColor: '#1B2025',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playAgainText: {
    color: '#5E6D81',
    fontSize: 24,
    fontWeight: '300'
  },
  toast: {
    backgroundColor: '#1B2025',
    borderRadius: 4,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5
  },
  toastText: {
    fontSize: 14,
    fontWeight: '300'
  }
});
