import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

export default function ButtonOpacity ({
  onPress,
  label,
  iconName,
  iconSize,
  activeOpacity,
  buttonStyle = styles.buttonStyle,
  textStyle = styles.textStyle
}) {
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={activeOpacity}
      iconName={iconName}
      iconSize={iconSize}
    >
      <Text style={textStyle}>{label}</Text>
      <Icon name={iconName} size={iconSize} style={styles.iconStyle} />
    </TouchableOpacity>
  )
}

ButtonOpacity.defaultProps = {
  onPress: () => {
    Alert.alert('click!')
  },
  label: 'I am a button'
}

ButtonOpacity.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  buttonStyle: PropTypes.any,
  textColor: PropTypes.any,
  activeOpacity: PropTypes.number
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17c0eb',
    width: '80%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 40,
    borderColor: '#17c0eb',
    borderWidth: 10,
    margin: 10
  },
  textStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'darkblue',
    fontFamily: 'OldStandard-Bold',
    fontSize: 20
  },
  iconStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 20,
    color: 'darkblue'
  }
})
