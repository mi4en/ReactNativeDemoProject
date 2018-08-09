import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  CheckBox
} from 'react-native'

export default class TermsAndConditionsButton extends Component {
  constructor () {
    super()
    this.state = {
      checked: false
    }
  }

  _onPress = () => {
    this.props.navigation.navigate('TermsAndConditions')
  }

  _onPressBtn = () => {
    this.props.navigation.navigate('Welcome')
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.termsText}>I agree with the</Text>
        <TouchableOpacity
          style={styles.termsCondsButton}
          activeOpacity={0.5}
          onPress={this._onPressBtn}
        >
          <Text style={styles.termsCondsButtonText}>terms and conditions</Text>
        </TouchableOpacity>
        <CheckBox
          style={styles.termsCondsButton}
          value={this.state.checked}
          onValueChange={() => this.setState({ checked: !this.state.checked })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  termsCondsButton: {
    margin: 10,
    // paddingBottom: 20,
    backgroundColor: 'white'
  },
  termsText: {
    color: 'black',
    textAlign: 'center',
    paddingLeft: 20
  },
  termsCondsButtonText: {
    color: 'blue',
    textAlign: 'center'
  }
})
