import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ButtonFooter({
	onPress,
	label,
	iconName,
	iconSize,
	activeOpacity,
	buttonStyle = styles.buttonStyle
}) {
	return (
		<TouchableOpacity
			style={buttonStyle}
			label={label}
			iconName={iconName}
			iconSize={iconSize}
			onPress={onPress}
			activeOpacity={activeOpacity}
		>
			<Icon name={iconName} size={iconSize} style={styles.iconStyle} />
			<Text style={styles.textStyle}>{label}</Text>
		</TouchableOpacity>
	);
}

ButtonFooter.defaultProps = {
	onPress: () => {
		Alert.alert('click!');
	},
	iconName: 'md-add',
	iconSize: 30,
	label: 'Footer button'
};

ButtonFooter.propTypes = {
	onPress: PropTypes.func.isRequired,
	buttonStyle: PropTypes.any,
	activeOpacity: PropTypes.number
};

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: 'white',
		width: '30%',
		height: 50,
		justifyContent: 'center',
		// alignSelf: 'center',
		borderRadius: 40,
		borderColor: 'white',
		borderWidth: 1,
		margin: 10
	},
	iconStyle: {
		color: 'gray',
		textAlign: 'center',
		textAlignVertical: 'center'
	},
	textStyle: {
		fontSize: 10,
		color: 'black',
		alignSelf: 'center'
	}
});
