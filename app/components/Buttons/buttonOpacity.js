import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ButtonOpacity({
	onPress,
	disabled,
	label,
	iconName,
	iconSize,
	activeOpacity,
	buttonStyle = disabled ? styles.buttonStyleDisabled : styles.buttonStyle,
	textStyle = disabled ? styles.textStyleDisabled : styles.textStyle
}) {
	return (
		<TouchableOpacity
			style={buttonStyle}
			onPress={onPress}
			activeOpacity={activeOpacity}
			iconName={iconName}
			iconSize={iconSize}
			disabled={disabled}
			textStyle={textStyle}
		>
			<Text style={textStyle}>{label}</Text>
			<Icon name={iconName} size={iconSize} style={styles.iconStyle} />
		</TouchableOpacity>
	);
}

ButtonOpacity.defaultProps = {
	onPress: () => {
		Alert.alert('click!');
	},
	label: 'I am a button',
	disabled: false
};

ButtonOpacity.propTypes = {
	onPress: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	buttonStyle: PropTypes.any,
	textColor: PropTypes.any,
	activeOpacity: PropTypes.number
};

const styles = StyleSheet.create({
	buttonStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#17c0eb',
		width: '80%',
		height: 50,
		alignSelf: 'center',
		borderRadius: 40,
		borderColor: '#17c0eb',
		borderWidth: 1,
		margin: 10
	},
	buttonStyleDisabled: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		width: '80%',
		height: 50,
		alignSelf: 'center',
		borderRadius: 40,
		borderColor: 'lightblue',
		borderWidth: 1,
		margin: 10
	},
	textStyle: {
		textAlign: 'center',
		textAlignVertical: 'center',
		color: 'darkblue',
		fontFamily: 'OldStandard-Bold',
		fontSize: 20
	},
	textStyleDisabled: {
		textAlign: 'center',
		textAlignVertical: 'center',
		color: 'lightblue',
		fontFamily: 'OldStandard-Bold',
		fontSize: 20
	},
	iconStyle: {
		textAlign: 'center',
		textAlignVertical: 'center',
		marginLeft: 20,
		color: 'darkblue'
	}
});
