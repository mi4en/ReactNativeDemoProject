import React, { Component } from 'react';
import { YellowBox } from 'react-native';

import { RootStack } from './config/Navigation';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
