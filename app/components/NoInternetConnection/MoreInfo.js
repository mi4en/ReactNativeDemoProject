import React, { Component } from 'react';
import {Text, Scrollview, StyleSheet } from 'react-native';

export default class MoreInfo extends Component {
  state = {};
  render() {
    return (
      <Scrollview style={styles.container}>
        <Text>some text explaining what user can do with no internet</Text>
      </Scrollview>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});
