import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native'
import { Tile, List, ListItem } from 'react-native-elements'
import { images } from '../../assets/images/Images'
import ButtonOpacity from '../Buttons/buttonOpacity'

export default class Retailer extends Component {
  static navigationOptions = {
    headerTitle: 'Retailer',
    headerTintColor: '#2980b9',
    headerStyle: { elevation: 0 },
    headerRight: (
      <Image source={images.logoMain} style={{ width: 60, height: 60 }} />
    )
  }

  state = {}

  render () {
    const { picture, name, email, address } = this.props.navigation.state.params

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large }}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />

        <List>
          <ListItem title="Email" rightTitle={email} hideChevron />
        </List>
        <TextInput
          underlineColorAndroid="#2980b9"
          placeholder="Loyalty Card Number"
          placeholderTextColor="black"
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
          placeholderTextColor="black"
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
          placeholderTextColor="black"
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
    )
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
  }
})
