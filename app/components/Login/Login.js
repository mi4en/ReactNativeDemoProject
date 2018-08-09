import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from 'react-native'
import { images } from '../../assets/images/Images'
import ButtonOpacity from '../Buttons/buttonOpacity'

export default class Login extends Component {
  static navigationOptions = {
    headerTitle: 'Login Menu',
    headerTintColor: '#2980b9',
    headerStyle: { elevation: 0, shadowOpacity: 0 }
  }

  _onPressButtonTest = () => {
    Alert.alert('Click!')
  }

  _onLoginPress = () => {
    this.props.navigation.navigate('Notifications')
  }
  render () {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={images.logoMain} />
            <Text style={styles.logoText}>IS Retail Wallet</Text>
          </View>
          <View style={styles.container}>
            <TextInput
              underlineColorAndroid="#2980b9"
              placeholder="E-mail address"
              placeholderTextColor="black"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onSubmitEditing={() => this.passwordInput.focus()}
              style={styles.input}
            />
            <TextInput
              underlineColorAndroid="#2980b9"
              placeholder="Password"
              secureTextEntry
              autoCapitalize="none"
              placeholderTextColor="black"
              returnKeyType="done"
              style={styles.input}
              ref={input => (this.passwordInput = input)}
            />
            <ButtonOpacity label={'Login'} onPress={this._onLoginPress} />
            <ButtonOpacity
              label={'Forgot password?'}
              buttonStyle={styles.forgotPassButton}
              textStyle={styles.forgotPassButtonText}
              activeOpacity={0.5}
              onPress={this._onPressButtonTest}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '90%',
    backgroundColor: 'white',
    color: 'black',
    marginTop: 10,
    marginBottom: 10
  },
  logoContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  logo: {
    width: 150,
    height: 150
  },
  logoText: {
    color: '#2980b9',
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'OldStandard-Bold',
    fontSize: 30
  },
  forgotPassButton: {
    width: '50%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  forgotPassButtonText: {
    color: 'black',
    textAlign: 'center'
  }
})
