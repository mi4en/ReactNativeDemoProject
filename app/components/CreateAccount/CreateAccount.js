import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  AsyncStorage
} from 'react-native'
import TermsAndConditionsButton from '../Buttons/termCondBtn'
import { images } from '../../assets/images/Images'
import ButtonOpacity from '../Buttons/buttonOpacity'

export default class CreateAccount extends Component {
  static navigationOptions = {
    headerTitle: 'Create Account Menu',
    headerRight: (
      <Image source={images.logoMain} style={{ width: 60, height: 60 }} />
    ),
    headerRightContainerStyle: { paddingRight: 20, paddingTop: 10 },
    headerTintColor: '#2980b9',
    headerStyle: { elevation: 0 }
  }

  constructor (props) {
    super(props)
    this.state = {
      emailInput: '',
      passInput: '',
      confpassInput: ''
    }
  }

  checkInput = () => {
    const { emailInput, passInput, confPassInput } = this.state
    const validatePass = /(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let invalidEmail = false
    let invalidPass = false
    let invalidConfPass = false
    if (emailInput === '') {
      this.setState({ ErrorEmail: 'Please fill your email address!' })
      this.setState({ invalidEmail: true })
    } else if (validateEmail.test(emailInput) === false) {
      this.setState({ ErrorEmail: 'Invalid email format!' })
      this.setState({ invalidEmail: true })
    } else if (passInput === '') {
      this.setState({ ErrorPass: 'Please enter your password!' })
      this.setState({ invalidPass: true })
    } else if (validatePass.test(passInput) === false) {
      this.setState({
        ErrorPass:
          'Invalid password format. Password must be atleast 6 characters, ' +
          'contain atleast one letter, one digit and one special character!'
      })
      this.setState({ invalidPass: true })
    } else if (confPassInput === '') {
      this.setState({ ErrorConfPass: 'Please confirm your password!' })
      this.setState({ invalidConfPass: true })
    } else if (passInput !== confPassInput) {
      this.setState({
        ErrorConfPass: "Confirm password doesn't match with password!"
      })
      this.setState({ invalidConfPass: true })
    } else {
      this.setState({ Message: 'Your credentials are correct!' })
      this.props.navigation.navigate('Notifications')
    }
  }

  _onPress = () => {
    this.props.navigation.navigate('TermsAndConditions')
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={images.logoMain} />
          </View>
          <TextInput
            value={this.state.emailInput}
            underlineColorAndroid="#2980b9"
            placeholder="E-mail address"
            placeholderTextColor="black"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            ref={ref => (this.emailAddressInput = ref)}
            onSubmitEditing={() => this.passwordInput.focus()}
            style={[
              styles.input,
              this.state.invalidEmail ? styles.inputError : null
            ]}
            onChangeText={emailInput => this.setState({ emailInput })}
            onFocus={() =>
              this.setState({
                emailInput: this.state.emailInput,
                invalidEmail: false
              })
            }
          />
          <Text style={{ color: 'red', textAlign: 'center' }}>
            {this.state.invalidEmail ? this.state.ErrorEmail : null}
          </Text>
          <TextInput
            value={this.state.passInput}
            underlineColorAndroid="#2980b9"
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="black"
            returnKeyType="next"
            style={[
              styles.input,
              this.state.invalidPass ? styles.inputError : null
            ]}
            ref={ref => (this.passwordInput = ref)}
            onChangeText={passInput => this.setState({ passInput })}
            onSubmitEditing={() => this.confirmPasswordInput.focus()}
            onFocus={() => this.setState({ passInput: '', invalidPass: false })}
          />
          <Text style={{ color: 'red', textAlign: 'center' }}>
            {this.state.invalidPass ? this.state.ErrorPass : null}
          </Text>
          <TextInput
            value={this.state.confPassInput}
            underlineColorAndroid="#2980b9"
            placeholder="Confirm password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="black"
            returnKeyType="done"
            style={[
              styles.input,
              this.state.invalidConfPass ? styles.inputError : null
            ]}
            ref={ref => (this.confirmPasswordInput = ref)}
            onChangeText={confPassInput => this.setState({ confPassInput })}
            onFocus={() =>
              this.setState({ confPassInput: '', invalidConfPass: false })
            }
          />
          <Text style={{ color: 'red', textAlign: 'center' }}>
            {this.state.invalidConfPass ? this.state.ErrorConfPass : null}
          </Text>
          <ButtonOpacity label={'Create Account'} onPress={this.checkInput} />
          <TermsAndConditionsButton />
          <TouchableOpacity
            style={styles.termsCondsButton}
            activeOpacity={0.5}
            onPress={this._onPress}
          >
            <Text style={styles.termsCondsButtonText}>
              terms and conditions
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

  // login function to be implemented
  login = () => {
    if (this.state.checked === true) {
      Alert.alert('wow')
      fetch('http://123.123.0.1/e.g users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.emailInput,
          password: this.state.passInput
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.success === true) {
            AsyncStorage.setItem('user', res.user)
            this.props.navigation.navigate('Page After Login')
          } else {
            Alert(res.message)
          }
        })
        .done()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  input: {
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  inputError: {
    width: '90%',
    backgroundColor: 'red',
    marginBottom: 10,
    marginTop: 10
  },
  logoContainer: {
    margin: 20,
    alignItems: 'flex-end'
  },
  logo: {
    width: 60,
    height: 60
  }
})
