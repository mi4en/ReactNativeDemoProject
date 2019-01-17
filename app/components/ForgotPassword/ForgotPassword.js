import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	Image,
	Alert,
	KeyboardAvoidingView,
	StyleSheet
} from 'react-native';
import { images } from '../../assets/images/Images';
import ButtonOpacity from '../Buttons/buttonOpacity';

export default class ForgotPassword extends Component {
	static navigationOptions = {
		headerTitle: 'Forgot Password',
		headerTintColor: '#2980b9',
		headerStyle: { elevation: 0, shadowOpacity: 0 },
		headerRight: (
			<Image source={images.logoMain} style={{ width: 60, height: 60 }} />
		)
	};

	state = {};

	_onPressButtonSubmit = () => {
		Alert.alert('Click');
	};

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.container}>
					<Text style={styles.MessageText}>
						Reset password text dependign on the functionality
					</Text>
					<TextInput
						underlineColorAndroid="#2980b9"
						placeholder="E-mail address"
						placeholderTextColor="gray"
						returnKeyType="done"
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="email-address"
						style={styles.input}
					/>
					<ButtonOpacity label={'Submit'} activeOpacity={0.5} />
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'white'
	},
	input: {
		width: '90%',
		backgroundColor: 'white',
		color: 'black',
		marginTop: 30,
		marginBottom: 30,
		alignSelf: 'center'
	},
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
		borderWidth: 10,
		margin: 10
	},
	MessageText: {
		color: 'black',
		marginTop: 10,
		textAlign: 'center',
		fontFamily: 'OldStandard-Bold',
		fontSize: 25
	}
});
