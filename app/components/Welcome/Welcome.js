import React, { Component } from 'react';
import {
	View,
	Text,
	Alert,
	StyleSheet,
	Image,
	ScrollView,
	AsyncStorage
} from 'react-native';
import { images } from '../../assets/images/Images';
import ButtonOpacity from '../Buttons/buttonOpacity';
import InternetConnectionStatus from '../NoInternetConnection/internetConnectionStatus';

const accessDataInstructions =
	'In order to access your data from web or share your card across other devises, please login or create an account';

export default class Welcome extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		// this function will be executed on loading screen
		this._authUser();
	}

	// if token exists will be redirected directly to home screen
	// _authUser = async () => {
	// 	const userToken = await AsyncStorage.getItem('id_token');
	// 	this.props.navigation.navigate(userToken ? 'YourCards' : 'Welcome');
	// };
	_authUser = async () => {
		const user = await AsyncStorage.getItem('item');
		this.props.navigation.navigate(user ? 'YourCards' : 'Welcome');
	};

	_onPressCreateAccButton = () => {
		this.props.navigation.navigate('CreateAccount');
	};

	_onPressLoginButton = () => {
		this.props.navigation.navigate('Login');
	};

	_onPressTest = () => {
		Alert.alert('Click!');
	};

	render() {
		return (
			<View style={styles.container}>
				<InternetConnectionStatus />
				<ScrollView>
					<View style={styles.container}>
						<InternetConnectionStatus />
						<View style={styles.logoContainer}>
							<Image style={styles.logo} source={images.logoMain} />

							<Text style={styles.logoText}>IS Retail Wallet</Text>
						</View>
						<ButtonOpacity
							iconName={'md-log-in'}
							iconSize={35}
							onPress={this._onPressLoginButton}
							label={'Login'}
						/>

						<ButtonOpacity
							onPress={this._onPressCreateAccButton}
							label={'Create Account'}
							activeOpacity={0.4}
							iconName={'md-person-add'}
							iconSize={35}
						/>

						<Text style={styles.instructions}>{accessDataInstructions}</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
		marginTop: 50
	},
	instructions: {
		textAlign: 'center',
		color: 'black',
		margin: 20
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
	}
});
