import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { images } from '../../assets/images/Images';
import Barcode from 'react-native-barcode-builder';
import { Tile } from 'react-native-elements';

export default class VoucherDetails extends Component {
	static navigationOptions = {
		headerTitle: 'Voucher Details',
		headerTintColor: '#2980b9',
		headerStyle: { elevation: 0 },
		headerRight: (
			<Image source={images.logoMain} style={{ width: 60, height: 60 }} />
		)
	};

	render() {
		const { barcode, logo, amount } = this.props.navigation.state.params;

		return (
			<View style={styles.container}>
				<Tile imageSrc={logo} title={amount} />
				<Barcode value={barcode} format="CODE128" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center'
	}
});
