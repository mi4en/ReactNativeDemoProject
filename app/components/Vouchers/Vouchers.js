import React, { Component } from 'react';
import { View, ScrollView, FlatList, StyleSheet, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { images } from '../../assets/images/Images';
import { vouchers } from '../../config/dummyData';

export default class Vouchers extends Component {
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
		headerTitle: 'Vouchers',
		headerTintColor: '#2980b9',
		headerStyle: { elevation: 0 },
		headerRight: (
			<Image source={images.logoMain} style={{ width: 60, height: 60 }} />
		)
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = () => {
		this.setState({ data: vouchers });
		this.arrayHolder = this.state.data;
	};

	keyExtractor = (item, index) => index.toString();

	_onSelectVoucher = voucher => {
		this.props.navigation.navigate('VoucherDetails', { ...voucher });
	};

	renderItem = ({ item }) => (
		<ListItem
			avatar={<Image source={item.logo} style={styles.avatarImg} />}
			title={`${item.type}`}
			subtitle={`${item.amount}`}
			onPress={() => this._onSelectVoucher(item)}
		/>
	);

	render() {
		return (
			<ScrollView style={styles.container}>
				<List>
					<FlatList
						keyExtractor={this.keyExtractor}
						data={this.state.data}
						renderItem={this.renderItem}
					/>
				</List>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	avatarImg: {
		height: 50,
		width: 100
	}
});
