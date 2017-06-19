import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  margin: 20px;
`;

export default class Question extends Component {
  render() {
    return (
      <View>
        <Text>
          Question: {this.props.q}
        </Text>
      </View>
    );
  }
}