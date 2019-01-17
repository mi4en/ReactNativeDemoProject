import React, { Component } from 'react';
import { View, StyleSheet, Text, NetInfo } from 'react-native';

function ShowConnectionStatus() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
      {/* <Button title="press for more info" onPress={this._onPressMoreInfo} /> */}
    </View>
  );
}

export default class InternetConnectionStatus extends Component {
  state = {
    isConnected: true
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectivityChange
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange
    );
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  _onPressMoreInfo = () => {
    this.props.navigation.navigate('MoreInfo');
  };

  render() {
    if (!this.state.isConnected) {
      return <ShowConnectionStatus />;
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    top: 30
  },
  offlineText: {
    color: '#fff'
  }
});
