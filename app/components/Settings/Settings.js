import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import ButtonOpacity from '../Buttons/buttonOpacity';
import { images } from '../../assets/images/Images';

export default class Settings extends Component {
  static navigationOptions = {
    headerTitle: 'Settings Menu',
    headerTintColor: '#2980b9',
    headerStyle: { elevation: 0, shadowOpacity: 0 },
    headerRight: (
      <Image source={images.logoMain} style={{ width: 60, height: 60 }} />
    )
  };

  _onChangePasswordPress = () => {
    this.props.navigation.navigate('ChangePassword');
  };

  _onNotificationSettingsPress = () => {
    this.props.navigation.navigate('NotificationsSettings');
  };

  render() {
    return (
      <View style={styles.container}>
        <ButtonOpacity
          label={'Change Pasword'}
          activeOpacity={0.5}
          onPress={this._onChangePasswordPress}
        />
        <ButtonOpacity
          label={'Notifications Settings'}
          activeOpacity={0.5}
          onPress={this._onNotificationSettingsPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100
  }
});
