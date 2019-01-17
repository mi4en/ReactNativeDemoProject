import React, { Component } from 'react';
import { Paths } from '../../config/paths';

import {
	StyleSheet,
	View,
	Image,
	Text,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
	Alert,
	AsyncStorage
} from 'react-native';
import { images } from '../../assets/images/Images';
import ButtonOpacity from '../Buttons/buttonOpacity';

export default class Login extends Component {
	static navigationOptions = {
		headerTitle: '', // "Login Menu",
		headerTintColor: '#2980b9',
		headerStyle: { elevation: 0, shadowOpacity: 0 }
	};

	constructor(props) {
		super(props);
		this.state = {
			emailInput: '',
			passInput: ''
		};
	}

	_onPressButtonTest = () => {
		Alert.alert('Click Click!');
	};

	_onPressButtonForgotPass = () => {
		this.props.navigation.navigate('ForgotPassword');
	};

	// here we save the token provided from the backend
	async saveItem(item, selectedValue) {
		try {
			await AsyncStorage.setItem(item, selectedValue);
		} catch (error) {
			Alert.alert('AsyncStorage error: ' + error.message);
			console.error('AsyncStorage error: ' + error.message);
		}
	}

	// _onPressUserLogin = () => {
	// 	if (!this.state.emailInput || !this.state.passInput) return;
	// 	console.log(Paths);
	// 	fetch(Paths.loginpath, {
	// 		method: 'POST',
	// 		headers: {
	// 			Accept: 'application/json',
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			username: this.state.emailInput,
	// 			password: this.state.passInput
	// 		})
	// 	})
	// 		.then(response => response.json())
	// 		.then(responseData => {
	// 			Alert.alert('Login Success!');
	// 			this.saveItem('id_token', responseData.id_token);
	// 			this.saveItem('access_token', responseData.access_token);
	// 			this.props.navigation.navigate('YourCards');
	// 		})
	// 		.done();
	// };
	_onPressUserLogin = () => {
		if (this.state.emailInput === 'a' && this.state.passInput === 'a') {
			this.saveItem('item', 'userA');
			this.props.navigation.navigate('YourCards');
		} else {
			Alert.alert('Wrong email or password!');
		}
	};

	render() {
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
							placeholderTextColor="gray"
							returnKeyType="next"
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							onChangeText={emailInput => this.setState({ emailInput })}
							value={this.state.emailInput}
							onSubmitEditing={() => this.passwordInput.focus()}
							style={styles.input}
						/>
						<TextInput
							underlineColorAndroid="#2980b9"
							placeholder="Password"
							secureTextEntry
							autoCapitalize="none"
							placeholderTextColor="gray"
							returnKeyType="done"
							style={styles.input}
							onChangeText={passInput => this.setState({ passInput })}
							value={this.state.passInput}
							ref={input => (this.passwordInput = input)}
						/>
						<ButtonOpacity
							label={'Login'}
							onPress={this._onPressUserLogin}
							disabled={!this.state.emailInput || !this.state.passInput}
							buttonStyle={
								!this.state.emailInput || !this.state.passInput
									? styles.buttonStyleDisabled
									: styles.buttonStyle
							}
							textStyle={
								!this.state.emailInput || !this.state.passInput
									? styles.textStyleDisabled
									: styles.textStyle
							}
						/>
						<ButtonOpacity
							label={'Forgot password?'}
							buttonStyle={styles.forgotPassButton}
							textStyle={styles.forgotPassButtonText}
							activeOpacity={0.5}
							onPress={this._onPressButtonForgotPass}
						/>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		);
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
});
