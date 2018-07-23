import React, { Component } from 'react';
import { Text } from 'react-native';
import { Header, Wrapper, Section, Loader } from './components/common';

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <Wrapper>
        <Loader
          animationType={'none'}
          color={'blue'}
          loading={this.state.loading}
          size={60}  //  numeric value for this loader
          transparent
        />
        <Header titleText='Chapter 2 Tip 9' subTitleText='Web View'>
          Your Menu Here
        </Header>
        <Section>
            <Text>This is tip9 hello!</Text>
        </Section>
      </Wrapper>
    );
  }
}

export default MainApp;
