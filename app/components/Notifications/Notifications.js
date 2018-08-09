import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import TermsAndConditionsButton from '../Buttons/termCondBtn'
import { createStackNavigator } from 'react-navigation'
import { images } from '../../assets/images/Images'
import ButtonOpacity from '../Buttons/buttonOpacity'

export default class Welcome extends Component {
  static navigationOptions = {
    headerTitle: 'Notifications Menu',
    headerTintColor: '#2980b9',
    headerStyle: { elevation: 0 }
  }

  _onSkipPress = () => {
    this.props.navigation.navigate('YourCards')
  }

  _onNotifyMePress = () => {
    this.props.navigation.navigate('YourCards')
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={images.logoMain} />
          </View>
          <Text style={styles.textQuestion}>Turn on notifications?</Text>
          <Text style={styles.textMessage}>
            We can let you know when retailers publish offers.
          </Text>
          <ButtonOpacity
            onPress={this._onNotifyMePress}
            label={'Notify me'}
            activeOpacity={0.4}
            buttonStyle={styles.buttonNotify}
          />
          <ButtonOpacity
            onPress={this._onSkipPress}
            label={'Skip'}
            activeOpacity={0.4}
            buttonStyle={styles.buttonSkip}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoContainer: {
    margin: 20,
    alignItems: 'flex-end'
  },

  logo: {
    width: 60,
    height: 60
  },
  textQuestion: {
    color: '#2980b9',
    marginTop: 10,
    marginLeft: 20,
    textAlign: 'left',
    fontFamily: 'OldStandard-Bold',
    fontSize: 30
  },
  textMessage: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    color: 'black',
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 20
  },
  buttonNotify: {
    backgroundColor: '#17c0eb',
    width: '60%',
    height: 50,
    borderRadius: 40,
    borderColor: '#17c0eb',
    borderWidth: 10,
    margin: 10,
    marginLeft: 20
  },
  buttonSkip: {
    backgroundColor: 'white',
    width: '30%',
    height: 50,
    borderRadius: 40,
    borderColor: '#17c0eb',
    borderWidth: 3,
    margin: 10,
    marginLeft: 20,
    paddingTop: 5
  }
})
