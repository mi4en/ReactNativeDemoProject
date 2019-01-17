import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class TermsAndConditionsButton extends Component {
	constructor() {
		super();
		this.state = {
			checked: false
		};
	}

	_onPressTermsConds = () => {
		this.props.navigation.navigate('TermsAndConditions');
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.termsText}>I agree with the</Text>
				<TouchableOpacity
					style={styles.termsCondsButton}
					activeOpacity={0.5}
					onPress={this._onPressTermsConds}
				>
					<Text style={styles.termsCondsButtonText}>terms and conditions</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default withNavigation(TermsAndConditionsButton);

const styles = StyleSheet.create({
	container: {
		flex: 0.8,
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	termsCondsButton: {
		margin: 10,
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
});
