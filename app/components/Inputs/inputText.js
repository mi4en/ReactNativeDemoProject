import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'

export function InputUsername ({
  placeholder,
  placeholderTextColor,
  keyboardType,
  returnKeyType,
  autoCapitalize,
  autoCorrect,
  onSubmitEditing,
  style = styles.input
}) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      onSubmitEditing={onSubmitEditing}
      style={style}
      ref={input => (this.passwordInput = input)}
    />
  )
}

InputUsername.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  style: PropTypes.any
}
InputUsername.defaultProps = {
  placeholder: 'E-mail address',
  placeholderTextColor: 'black',
  returnKeyType: 'next',
  autoCapitalize: 'none',
  autoCorrect: false,
  keyboardType: 'email-address'
}

export function InputPassword ({
  placeholder,
  secureTextEntry,
  placeholderTextColor,
  returnKeyType,
  style = styles.input,
  onSubmitEditing,
  ref
}) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={placeholderTextColor}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      style={style}
      ref={input => (this.passwordInput = input)}
    />
  )
}

InputPassword.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  returnKeyType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  style: PropTypes.any,
  onSubmitEditing: PropTypes.func
}

InputPassword.defaultProps = {
  placeholder: 'Password',
  secureTextEntry: true,
  placeholderTextColor: 'black',
  returnKeyType: 'go'
}

const styles = StyleSheet.create({
  input: {
    // height: '10%',
    width: '90%',
    backgroundColor: 'white',
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
