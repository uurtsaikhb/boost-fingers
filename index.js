import React, { Component } from 'react';
import { AppRegistry } from 'react-native';


import App from './App';
import Splash from './src/components/Splash';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'Splash'
    }

    setTimeout(() => {
      this.setState({
        currentScreen: 'App'
      });
    }, 1);
  }

  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <App />;

    return mainScreen;
  }
}
AppRegistry.registerComponent('BoostFingers', () => Main);