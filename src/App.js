import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import Speakers from './Speakers';

const Container = styled.View`
  margin-top: 200px;
  justifyContent: center;
  alignItems: center;
`;

export default class fluentConfReactNativeApp extends Component {
  render() {
    return (
      <Container>
        <Text>
          Welcome to FluentConf!
        </Text>
      </Container>
    );
  }
}

const mainNavigator = TabNavigator({
  Home: {
    screen: fluentConfReactNativeApp,
    path: ''
  },
  Speakers: {
    screen: Speakers,
    path: 'speakers'
  }
});

AppRegistry.registerComponent('fluentConfReactNativeApp', () => mainNavigator);
