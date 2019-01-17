import React, { Component } from 'react';
import {
	StyleSheet,
	TextInput,
	Text,
	KeyboardAvoidingView,
	Image,
	ScrollView
} from 'react-native';
import { images } from '../../assets/images/Images';
import ButtonOpacity from '../Buttons/buttonOpacity';

export default class CreateAccount extends Component {
	static navigationOptions = {
		headerTitle: 'Change Password Menu',
		headerTintColor: '#2980b9',
		headerStyle: { elevation: 0 },
		headerRight: (
			<Image source={images.logoMain} style={{ width: 60, height: 60 }} />
		)
	};

	constructor(props) {
		super(props);
		this.state = {
			oldPassInput: '',
			passInput: '',
			confPassInput: ''
		};
	}

	checkInput = () => {
		//const { oldPassInput, passInput, confPassInput } = this.state;
		const validatePass = /(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
		// const validateOldPass =
		// let invalidOldPass = false
		let invalidPass = false;
		let invalidConfPass = false;
		// if (oldPassInput === '') {
		//   this.setState({ ErrorOldPass: 'Incorrect password!' })
		//   this.setState({ invalidOldPass: true })
		if (passInput === '') {
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
			this.setState({ Message: 'Your credentials are correct!' });
			this.props.navigation.navigate('YourCards');
		}
	};

	render() {
		const { oldPassInput, passInput, confPassInput } = this.state;
		const isEnabled =
			oldPassInput.length > 0 &&
			passInput.length > 0 &&
			confPassInput.length > 0;

		return (
			<ScrollView style={styles.container}>
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<TextInput
						value={this.state.oldPassInput}
						underlineColorAndroid="#2980b9"
						placeholder="Old Password"
						placeholderTextColor="gray"
						returnKeyType="next"
						autoCapitalize="none"
						autoCorrect={false}
						ref={ref => (this.oldPasswordInput = ref)}
						onSubmitEditing={() => this.passwordInput.focus()}
						style={[
							styles.input,
							this.state.invalidOldPass ? styles.inputError : null
						]}
						onChangeText={oldPassInput => this.setState({ oldPassInput })}
						onFocus={() =>
							this.setState({
								oldPassInput: this.state.oldPassInput,
								ErrorOldPass: false
							})
						}
					/>
					<Text style={{ color: 'red', textAlign: 'center' }}>
						{this.state.invalidOldPass ? this.state.ErrorOldPass : null}
					</Text>
					<TextInput
						value={this.state.passInput}
						underlineColorAndroid="#2980b9"
						placeholder="New password"
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
							this.setState({
								confPassInput: '',
								invalidConfPass: false
							})
						}
					/>
					<Text style={{ color: 'red', textAlign: 'center' }}>
						{this.state.invalidConfPass ? this.state.ErrorConfPass : null}
					</Text>
					<ButtonOpacity
						label={'Submit'}
						onPress={this.checkInput}
						buttonStyle={
							isEnabled ? styles.buttonStyle : styles.buttonStyleDisabled
						}
						textStyle={isEnabled ? styles.textStyle : styles.textStyleDisabled}
						disabled={!isEnabled}
					/>
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
		marginBottom: 10,
		paddingTop: 50
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
	},
	logo: {
		width: 60,
		height: 60
	}
});
