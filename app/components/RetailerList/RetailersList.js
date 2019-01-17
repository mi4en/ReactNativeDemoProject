import React, { Component } from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import { List, ListItem, Title, SearchBar } from 'react-native-elements';
import { images } from '../../assets/images/Images';
import { retailers } from '../../config/dummyData';

export default class RetailersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			error: null,
			loading: false
		};
		this.arrayHolder = [];
	}

	static navigationOptions = {
		headerTitle: 'Retailers List',
		headerTintColor: '#2980b9',
		headerStyle: { elevation: 0 },
		headerRight: (
			<Image source={images.logoMain} style={{ width: 60, height: 60 }} />
		)
	};

	componentDidMount() {
		this.fetchData();
	}

	// fetchData = async () => {
	//   const response = await fetch('https://randomuser.me/api?results=20');
	//   const json = await response.json();
	//   this.setState({ data: json.results });
	//   this.arrayHolder = this.state.data;
	// };
	fetchData = () => {
		this.setState({ data: retailers });
		this.arrayHolder = this.state.data;
	};

	_onSelectRetailer = retailer => {
		this.props.navigation.navigate('Retailer', { ...retailer });
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
	searchFilterFunction = text => {
		const newData = this.arrayHolder.filter(item => {
			const itemData = `${item.name}`;
			const textData = text;
			return itemData.includes(textData, 0);
		});
		this.setState({ data: newData });
	};

	keyExtractor = (item, index) => index.toString();

	renderItem = ({ item }) => (
		<ListItem
			//roundAvatar
			//avatar={{ uri: item.picture.thumbnail }}
			avatar={<Image source={item.logo} style={styles.avatarImg} />}
			title={`${item.name}`}
			onPress={() => this._onSelectRetailer(item)}
		/>
	);

	render() {
		return (
			<View style={styles.container}>
				<List>
					{/* <SearchBar
						lightTheme
						onChangeText={text => this.searchFilterFunction(text.toLowerCase())}
						onClear={() => '...'}
						placeholder="Search Here..."
						containerStyle={{ backgroundColor: 'white' }}
						inputStyle={{ backgroundColor: 'white' }}
					/> */}
					<FlatList
						keyExtractor={this.keyExtractor}
						data={this.state.data}
						renderItem={this.renderItem}
					/>
				</List>
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
	avatarImg: {
		height: 50,
		width: 100
	}
});
