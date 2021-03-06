import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	Text,
	Alert,
	KeyboardAvoidingView,
	Image,
	ScrollView,
	AsyncStorage,
	CheckBox
} from 'react-native';
import TermsAndConditionsButton from '../Buttons/termCondBtn';
import { images } from '../../assets/images/Images';
import ButtonOpacity from '../Buttons/buttonOpacity';
import { Paths } from '../../config/paths';

export default class CreateAccount extends Component {
	static navigationOptions = {
		headerTitle: 'Create Account Menu',
		headerTintColor: '#2980b9',
		headerStyle: { elevation: 0 },
		headerRight: (
			<Image source={images.logoMain} style={{ width: 60, height: 60 }} />
		)
	};

	constructor(props) {
		super(props);
		this.state = {
			emailInput: '',
			passInput: '',
			confPassInput: '',
			checked: false
		};
	}

	_onPressCreateAccount = () => {
		// validate the user input so we eliminate the most common
		// errors and mistakes during email and pass input
		const { emailInput, passInput, confPassInput } = this.state;
		const validatePass = /(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
		const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		let invalidEmail = false;
		let invalidPass = false;
		let invalidConfPass = false;
		if (emailInput === '') {
			this.setState({ ErrorEmail: 'Please fill your email address!' });
			this.setState({ invalidEmail: true });
		} else if (validateEmail.test(emailInput) === false) {
			this.setState({ ErrorEmail: 'Invalid email format!' });
			this.setState({ invalidEmail: true });
		} else if (passInput === '') {
			this.setState({ ErrorPass: 'Please enter your password!' });
			this.setState({ invalidPass: true });
		} else if (validatePass.test(passInput) === false) {
			this.setState({
				ErrorPass:
					'Invalid password format. Password must be atleast 6 characters, ' +
					'contain atleast one letter, one digit and one special character!'
			});
			this.setState({ invalidPass: true });
		} else if (confPassInput === '') {
			this.setState({ ErrorConfPass: 'Please confirm your password!' });
			this.setState({ invalidConfPass: true });
		} else if (passInput !== confPassInput) {
			this.setState({
				ErrorConfPass: "Confirm password doesn't match with password!"
			});
			this.setState({ invalidConfPass: true });
		} else {
			// if the user input meet all reqs we execute the signup function
			this.userSignup();
		}
	};

	// function is used to save the token sent from the backend in the async storage
	saveItem = async (item, selectedValue) => {
		try {
			await AsyncStorage.setItem(item, selectedValue);
		} catch (error) {
			Alert.alert('AsyncStorage error: ' + error.message);
		}
	};

	userSignup = () => {
		if (!this.state.emailInput || !this.state.passInput) return;
		fetch(Paths.createAccountPath, {
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
			.then(responseData => {
				this.saveItem('id_token', responseData.id_token);
				this.saveItem('access_token', responseData.access_token);
				Alert.alert('Signup Success!');
				this.props.navigation.navigate('Notifications');
			})
			.done();
	};

	render() {
		// const { emailInput, passInput, confPassInput } = this.state
		const isEnabled =
			this.state.emailInput.length > 0 &&
			this.state.passInput.length > 0 &&
			this.state.confPassInput.length > 0 &&
			this.state.checked === true;

		return (
			<ScrollView style={styles.container}>
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<View style={styles.logoContainer}>
						<Image style={{ height: 70, width: 70 }} source={images.logoMain} />
					</View>
					<TextInput
						value={this.state.emailInput}
						underlineColorAndroid="#2980b9"
						placeholder="E-mail address"
						placeholderTextColor="gray"
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
						placeholderTextColor="gray"
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
						placeholderTextColor="gray"
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
					<ButtonOpacity
						label={'Create Account'}
						onPress={this._onPressCreateAccount}
						buttonStyle={
							isEnabled ? styles.buttonStyle : styles.buttonStyleDisabled
						}
						textStyle={isEnabled ? styles.textStyle : styles.textStyleDisabled}
						disabled={!isEnabled}
					/>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<TermsAndConditionsButton />
						<CheckBox
							value={this.state.checked}
							onValueChange={() =>
								this.setState({ checked: !this.state.checked })
							}
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
	}
});
