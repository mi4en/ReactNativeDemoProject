import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { images } from '../../assets/images/Images';
import ButtonOpacity from '../Buttons/buttonOpacity';

export default class TermsAndConditions extends Component {
  static navigationOptions = {
    headerTitle: 'Terms and conditions',
    headerTintColor: '#2980b9',
    headerStyle: { elevation: 0 },
    headerRight: (
      <Image source={images.logoMain} style={{ width: 60, height: 60 }} />
    )
  };

  _onPress = () => {
    this.props.navigation.navigate('CreateAccount');
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'left',
            color: 'black',
            margin: 20
          }}
        >
          The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et
          Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis
          iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must
          explain to you how all this mistaken idea of denouncing pleasure and
          praising pain was born and I will give you a complete account of the
          system, and officiis debitis aut rerum necessitatibus saepe eveniet ut
          et voluptates repudiandae sint et molestiae non recusandae. Itaque
          earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat."
        </Text>
        <ButtonOpacity label={'I agree'} onPress={this._onPress} />
      </ScrollView>
    );
  }
}
