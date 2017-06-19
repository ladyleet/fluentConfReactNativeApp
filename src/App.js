import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import Vue from './Vue';
import Ember from './Ember';
import Angular from './Angular';

const Container = styled.View`
    justifyContent: center;
    alignItems: center;
    margin-top: 300px;
`;

const StyledText = styled.Text`
  color: red;
`;

export default class fluentConfReactNativeApp extends Component {
  render() {
    return (
      <Container>
        <StyledText>
          Welcome to JS Jeopardy!
        </StyledText>
      </Container>
    );
  }
}

const mainNavigator = TabNavigator({
  Home: {
    screen: fluentConfReactNativeApp,
    path: ''
  },
  Angular: {
    screen: Angular,
    path: 'angular'
  },
  Ember: {
    screen: Ember,
    path: 'ember'
  }
});

AppRegistry.registerComponent('fluentConfReactNativeApp', () => mainNavigator);
