import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class OneSpeaker extends Component {
  render() {
    return (
      <View>
        <Text>
          Speaker: {this.props.s}
        </Text>
        <Text>
          Title: {this.props.t}
        </Text>
      </View>
    )
  }
}