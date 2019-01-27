import React, { Component } from 'react';
import {
	View,
	FlatList,
	StyleSheet,
	Image,
	Alert,
	BackHandler,
	Platform,
	AsyncStorage
} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { images } from '../../assets/images/Images';
import ButtonFooter from '../Buttons/buttonFooter';
import InternetConnectionStatus from '../NoInternetConnection/internetConnectionStatus';
import { cards } from '../../config/dummyData';

export default class YourCards extends Component {
	_didFocusSubscription;
	_willBlurSubscription;

	constructor(props) {
		super(props);
		this._didFocusSubscription = props.navigation.addListener(
			'didFocus',
			payload =>
				BackHandler.addEventListener(
					'hardwareBackPress',
					this.onBackButtonPressed
				)
		);
		this.state = {
			data: [],
			error: null,
			loading: false
		};
		this.arrayHolder = [];
	}

	static navigationOptions = {
		headerTitle: 'Your Cards',
		headerTintColor: '#2980b9',
		headerStyle: { elevation: 0 },
		headerLeft: null,
		headerRight: (
			<Image source={images.logoMain} style={{ width: 60, height: 60 }} />
		)
	};

	componentDidMount() {
		if (Platform.OS === 'android') {
			this._willBlurSubscription = this.props.navigation.addListener(
				'willBlur',
				payload =>
					BackHandler.removeEventListener(
						'hardwareBackPress',
						this.onBackButtonPressed
					)
			);
		}
		this.fetchData();
	}

	componentWillUnmount() {
		this._didFocusSubscription && this._didFocusSubscription.remove();
		this._willBlurSubscription && this._willBlurSubscription.remove();
	}

	onBackButtonPressed = () => {
		BackHandler.exitApp();
	};

	// fetchData = async () => {
	// 	const response = await fetch('https://randomuser.me/api?results=10');
	// 	const json = await response.json();
	// 	this.setState({ data: json.results });
	// 	this.arrayHolder = this.state.data;
	// };
	fetchData = () => {
		this.setState({ data: cards });
		this.arrayHolder = this.state.data;
	};

	_onSelectCard = card => {
		this.props.navigation.navigate('CardDetails', { ...card });
	};

	_onPressAdd = () => {
		this.props.navigation.navigate('BrandsList');
	};

	_onPressSettings = () => {
		this.props.navigation.navigate('Settings');
	};

	_onPressQuote = () => {
		AsyncStorage.getItem('access_token', function(error) {
			if (error) Alert.alert('Error getting token from Async storage');
		}).then(token => {
			fetch('http://172.18.102.103:3001/api/protected/random-quote', {
				method: 'GET',
				headers: { Authorization: 'Bearer ' + token }
			})
				.then(response => response.text())
				.then(quote => {
					Alert.alert('Chuck Norris Quote', quote);
				})
				.done();
		});
	};

	// _onPressLogout = async () => {
	// 	try {
	// 		await AsyncStorage.removeItem('id_token');
	// 		Alert.alert('Logout Success!');
	// 		this.props.navigation.navigate('Welcome');
	// 	} catch (error) {
	// 		console.log('AsyncStorage error: ' + error.message);
	// 		Alert.alert('AsyncStorage error: ' + error.message);
	// 	}
	// };
	_onPressLogout = async () => {
		try {
			await AsyncStorage.removeItem('item');
			Alert.alert('Logout Success!');
			this.props.navigation.navigate('Welcome');
		} catch (error) {
			console.log('AsyncStorage error: ' + error.message);
			Alert.alert('AsyncStorage error: ' + error.message);
		}
	};

	// searchFilterFunction = text => {
	// 	const newData = this.arrayHolder.filter(item => {
	// 		const itemData = `${item.name.title}
	//     ${item.name.first}
	//     ${item.name.last}`;
	// 		const textData = text;
	// 		return itemData.includes(textData, 0);
	// 	});
	// 	this.setState({ data: newData });
	// };

	keyExtractor = (item, index) => index.toString();

	renderItem = ({ item }) => (
		// <ListItem
		// 	roundAvatar
		// 	avatar={{ uri: item.picture.thumbnail }}
		// 	title={`${item.name.first} ${item.name.last}`}
		// 	onPress={() => this._onSelectCard(item)}
		// />
		<ListItem
			//roundAvatar
			avatar={<Image source={item.logo} style={styles.avatarImg} />}
			title={`Card Owner: ${item.name}`}
			subtitle={`User Points: ${item.userPoints}`}
			onPress={() => this._onSelectCard(item)}
		/>
	);

	render() {
		return (
			<View style={styles.container}>
				<InternetConnectionStatus />
				<List>
					{/* <SearchBar
						lightTheme
						onChangeText={text => this.searchFilterFunction(text.toLowerCase())}
						onClear={() => '...'}
						placeholder="Search here..."
						containerStyle={{ backgroundColor: 'white' }}
						inputStyle={{ backgroundColor: 'white' }}
					/> */}
					<FlatList
						keyExtractor={this.keyExtractor}
						data={this.state.data}
						renderItem={this.renderItem}
					/>
				</List>

				<View style={styles.footer}>
					<ButtonFooter
						iconName="md-settings"
						buttonStyle={styles.buttonFooter}
						onPress={this._onPressSettings}
						label={'Settings'}
					/>
					<ButtonFooter
						buttonStyle={styles.buttonFooter}
						onPress={this._onPressAdd}
						label={'Add new card'}
					/>
					{/* <ButtonFooter
						iconName="md-search"
						label={'CHUCK NORRIS'}
						buttonStyle={styles.buttonFooter}
						onPress={this._onPressQuote}
					/> */}
					<ButtonFooter
						iconName="md-log-out"
						label={'Logout'}
						buttonStyle={styles.buttonFooter}
						onPress={this._onPressLogout}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center'
	},
	footer: {
		flex: 0.2,
		left: 0,
		right: 0,
		bottom: 0,
		position: 'absolute',
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		height: 80,
		justifyContent: 'space-evenly',
		borderTopWidth: 1,
		borderTopColor: 'lightgray'
	},
	buttonFooter: {
		backgroundColor: 'white',
		width: '30%',
		height: 50,
		alignSelf: 'center',
		justifyContent: 'center',
		borderRadius: 40,
		borderColor: 'white',
		borderWidth: 1,
		margin: 10
	},
	avatarImg: {
		height: 50,
		width: 100
	}
});
