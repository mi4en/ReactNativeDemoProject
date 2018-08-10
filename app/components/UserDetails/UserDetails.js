import React, { Component } from 'react'
import { ScrollView, Image, Text } from 'react-native'
import { Tile, List, ListItem } from 'react-native-elements'
import { images } from '../../assets/images/Images'

export default class CardDetails extends Component {
  static navigationOptions = {
    headerTitle: 'User Details',
    headerTintColor: '#2980b9',
    headerStyle: { elevation: 0 },
    headerRight: (
      <Image source={images.logoMain} style={{ width: 60, height: 60 }} />
    )
  }

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
      </ScrollView>
    )
  }
}
