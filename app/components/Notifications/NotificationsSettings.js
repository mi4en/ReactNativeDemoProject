import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, Image, Alert } from 'react-native';
import { images } from '../../assets/images/Images';

export default class NotificationsSettings extends Component {
  static navigationOptions = {
    headerTitle: 'Notifications Settings',
    headerTintColor: '#2980b9',
    headerStyle: { elevation: 0 },
    headerRight: (
      <Image source={images.logoMain} style={{ width: 60, height: 60 }} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }

  SwitchFunction = value => {
    this.setState({ toggle: value });
    if (value === true) {
      // Switch notifications on
      Alert.alert('Notifications are turned ON');
    } else {
      // Switch notifications off
      Alert.alert('Notifications are turned OFF');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Switch Notifications On/Off</Text>
        <Switch
          onValueChange={value => this.SwitchFunction(value)}
          value={this.state.toggle}
          thumbColor={this.state.toggle ? '#2980b9' : 'gray'}
          trackColor={this.state.toggle ? 'lightblue' : 'gray'}
          style={{ transform: [{ scaleX: 1.6 }, { scaleY: 1.6 }] }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  textStyle: {
    color: '#2980b9',
    textAlign: 'center',
    fontSize: 30
  }
});
