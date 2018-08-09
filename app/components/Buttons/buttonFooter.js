import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

export default function ButtonFooter ({
  onPress,
  iconName,
  iconSize,
  activeOpacity,
  buttonStyle = styles.buttonStyle
}) {
  return (
    <TouchableOpacity
      style={buttonStyle}
      iconName={iconName}
      iconSize={iconSize}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <Icon name={iconName} size={iconSize} style={styles.iconStyle} />
    </TouchableOpacity>
  )
}

ButtonFooter.defaultProps = {
  onPress: () => {
    Alert.alert('click!')
  },
  iconName: 'md-add',
  iconSize: 50
}

ButtonFooter.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.any,
  activeOpacity: PropTypes.number
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'white',
    width: '30%',
    height: 50,
    justifyContent: 'center',
    // alignSelf: 'center',
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 10,
    margin: 10
  },
  iconStyle: {
    color: '#514f4f',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})
