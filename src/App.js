import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import Vue from './Vue';
import ReactJS from './ReactJS';
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
        <ScrollView>
          <StyledText>
          Welcome to JavaScript Jeopardy!
        </StyledText>
         <Image source={require('./img/jeopardy-js.png')}/>
        </ScrollView>
      </Container>
    );
  }
}

const mainNavigator = TabNavigator({
  Home: {
    screen: fluentConfReactNativeApp,
    path: ''
  },
  Vue: {
    screen: Vue,
    path: 'vue'
  },
  ReactJS: {
    screen: ReactJS,
    path: 'react'
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
