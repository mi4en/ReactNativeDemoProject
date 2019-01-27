import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { images } from '../../assets/images/Images';
import ButtonOpacity from '../Buttons/buttonOpacity';

export default class Brand extends Component {
	static navigationOptions = {
		headerTitle: 'Brand',
		headerTintColor: '#2980b9',
		headerStyle: { elevation: 0 },
		headerRight: (
			<Image source={images.logoMain} style={{ width: 60, height: 60 }} />
		)
	};

	state = {};

	render() {
		const {
			logo,
			name
			// email,
			// address
		} = this.props.navigation.state.params;

		return (
			<ScrollView style={{ backgroundColor: 'white' }}>
				<Tile
					imageSrc={logo}
					//featured
					//title={`${name.toUpperCase()}`}
					//caption={email}
				/>

				<List>
					{/* <ListItem
						title="Brand"
						rightTitle={name.toUpperCase()}
						hideChevron
					/> */}
				</List>
				<TextInput
					underlineColorAndroid="#2980b9"
					placeholder="Loyalty Card Number"
					placeholderTextColor="gray"
					returnKeyType="next"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					onSubmitEditing={() => this.emailInput.focus()}
					style={styles.input}
				/>
				<TextInput
					underlineColorAndroid="#2980b9"
					placeholder="E-mail address"
					placeholderTextColor="gray"
					returnKeyType="next"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					ref={ref => (this.emailInput = ref)}
					onSubmitEditing={() => this.phoneInput.focus()}
					style={styles.input}
				/>
				<TextInput
					underlineColorAndroid="#2980b9"
					placeholder="Phone"
					placeholderTextColor="gray"
					returnKeyType="done"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					ref={ref => (this.phoneInput = ref)}
					// onSubmitEditing={() => this.passwordInput.focus()}
					style={styles.input}
				/>
				<ButtonOpacity label={'Validate Info'} />
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
		marginBottom: 10,
		alignSelf: 'center'
	}
});
