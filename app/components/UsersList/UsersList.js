import React, { Component } from 'react'
import { FlatList, Text, View, Image } from 'react-native'
import { List, ListItem, Title } from 'react-native-elements'
import { images } from '../../assets/images/Images'

export default class UsersList extends Component {
  static navigationOptions = {
    headerTitle: 'Users List',
    headerTintColor: '#2980b9',
    headerStyle: { elevation: 0 },
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

  _onSelectRetailer = retailer => {
    this.props.navigation.navigate('User', { ...retailer })
  }

  render () {
    return (
      <View>
        <List>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i.toString()}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                avatar={{ uri: item.picture.thumbnail }}
                title={`${item.name.first} ${item.name.last}`}
                onPress={() => this._onSelectRetailer(item)}
              />
            )}
          />
        </List>
      </View>
    )
  }
}
