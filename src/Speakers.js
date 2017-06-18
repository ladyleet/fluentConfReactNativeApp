import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styled from 'styled-components/native';
import OneSpeaker from './OneSpeaker';

const Container = styled.View`
  margin-top: 200px;
  justifyContent: center;
  alignItems: center;
`;
const data = [{
  a: "ben lesh",
  b: "rxjs"
}];

export default class Speakers extends Component {
  render() {
    return (
      <Container>
        <Text>
          Speakers
        </Text>
        {data.map(speaker => (
          <OneSpeaker s={speaker.a} t={speaker.b}/>
        ))}
      </Container>
    );
  }
}
