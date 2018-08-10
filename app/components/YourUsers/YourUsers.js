import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { List, ListItem, Avatar, Button } from 'react-native-elements'
import { images } from '../../assets/images/Images'
import ButtonOpacity from '../Buttons/buttonOpacity'
import ButtonFooter from '../Buttons/buttonFooter'

export default class YourUsers extends Component {
  static navigationOptions = {
    headerTitle: 'Your Users',
    headerTintColor: '#2980b9',
    headerStyle: { elevation: 0 },
    headerLeft: null,
    headerRight: (
      <Image source={images.logoMain} style={{ width: 60, height: 60 }} />
    )
  }

  state = {
    data: []
  }

  componentWillMount () {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://randomuser.me/api?results=20')
    const json = await response.json()
    this.setState({ data: json.results })
  }

  _onSelectCard = card => {
    this.props.navigation.navigate('UserDetails', { ...card })
  }

  _onPressAdd = () => {
    this.props.navigation.navigate('UsersList')
  }

  _onBtnPress = () => {
    Alert.alert('Click!')
  }

  render () {
    return (
      <View style={styles.container}>
        <List>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i.toString()}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                avatar={{ uri: item.picture.thumbnail }}
                title={`${item.name.first} ${item.name.last}`}
                onPress={() => this._onSelectCard(item)}
              />
            )}
          />
        </List>

        <View style={styles.footer}>
          <ButtonFooter
            iconName="md-reorder"
            buttonStyle={styles.buttonFooter}
          />
          <ButtonFooter
            buttonStyle={styles.buttonFooter}
            onPress={this._onPressAdd}
          />
          <ButtonFooter
            iconName="md-search"
            buttonStyle={styles.buttonFooter}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  buttonFooter: {
    backgroundColor: 'white',
    width: '30%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 10,
    margin: 10
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
    borderTopWidth: 2,
    borderTopColor: 'gray'
  }
})
