import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import Question from './Question';

const data = [{
  Question: "Hey this is a question."
},{
  Question: "Hey this is another question."
}]
const Container = styled.View`
  margin: 20px;
`;

export default class Vue extends Component {
  render() {
    return (
      <Container>
        <Image source={require('./img/jeopardy-vue.png')}/>
        {data.map(question =>(
          <Question q={question.Question}/>
        ))}
      </Container>
    );
  }
}