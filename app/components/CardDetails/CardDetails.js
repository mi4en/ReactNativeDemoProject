import React, { Component } from 'react';
import { ScrollView, View, Image, StyleSheet, Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { images } from '../../assets/images/Images';
import ButtonFooter from '../Buttons/buttonFooter';
import QRCode from 'react-native-qrcode-svg';

export default class CardDetails extends Component {
	static navigationOptions = {
		headerTitle: 'Card Details',
		headerTintColor: '#2980b9',
		headerStyle: { elevation: 0 },
		headerRight: (
			<Image source={images.logoMain} style={{ width: 60, height: 60 }} />
		)
	};

	_onPressMap = () => {
		this.props.navigation.navigate('MapViewDummy');
	};

	_onPressVouchers = () => {
		this.props.navigation.navigate('Vouchers');
	};

	render() {
		const {
			userPoints,
			name,
			logo,
			cardNumber
		} = this.props.navigation.state.params;

		return (
			<View style={styles.container}>
				<ScrollView style={styles.card}>
					{/* <Tile
						//height={170}
						imageSrc={logo}
						title={`${name} ${userPoints} points`}
						contentContainerStyle={{ height: 70 }}
					/> */}
					<View>
						<Image
							source={logo}
							style={{ width: 250, height: 150, alignSelf: 'center' }}
						/>
					</View>
					<View
						style={{ marginTop: 10, marginBottom: 20, alignSelf: 'center' }}
					>
						<QRCode value={cardNumber} />
					</View>
					{/* <List>
						<ListItem
							//title="Name"
							title={name.toUpperCase()}
							hideChevron
							topDevider="true"
							bottomDevider="true"
						/>
						<ListItem
							//title="User Points"
							title={userPoints.toUpperCase()}
							hideChevron
						/>
						<ListItem
							//title="Card Number"
							title={cardNumber.toUpperCase()}
							hideChevron
						/>
					</List> */}
					<Text style={styles.textStyle}>{name}</Text>
					<Text style={styles.textStyle}>{userPoints} points</Text>
					<Text style={styles.textStyle}>CardNo: {cardNumber}</Text>
				</ScrollView>
				<View style={styles.footer}>
					<ButtonFooter
						iconName="md-cart"
						buttonStyle={styles.buttonFooter}
						onPress={this._onPressMap}
						label={'Stores'}
					/>
					<ButtonFooter
						iconName="md-card"
						buttonStyle={styles.buttonFooter}
						onPress={this._onPressVouchers}
						label={'Vouchers'}
					/>
					<ButtonFooter
						label={'Button'}
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
	card: {
		backgroundColor: 'white',
		//justifyContent: 'center',
		marginBottom: 70
	},
	footer: {
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
	textStyle: {
		color: '#5d6168',
		marginLeft: 10,
		marginBottom: 5,
		textAlign: 'center',
		fontFamily: 'OldStandard-Bold',
		fontSize: 20
	}
});
