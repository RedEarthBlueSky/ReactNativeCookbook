import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Header, Wrapper, Section, Loader } from './components/common';
import BrowserView from './BrowserView';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      links: [
        {
          title: 'My Blog',
          url: 'https://medium.com/@crysfel/latest',
        },
        {
          title: 'Project',
          url: 'http://www0.project-free-tv.ag/',
        },
        {
          title: 'Solar',
          url: 'https://solarmoviez.ru/',
        },
        {
          title: 'YouTube',
          url: 'https://www.youtube.com/',
        },
      ],
    };
  }

  static navigationOptions = {
    title: 'Home Page',
  };

  onPressButton(page) {
    this.props.navigation.push({ page });
  }

  renderButton = (btn, index) => {
    console.log(btn)
    const { push } = this.props.navigation;
    return (
      <TouchableOpacity
        key={index}
        style={styles.btn}
      >
        <Button
          style={styles.text}
          title={btn.title}  //  links.title
          onPress={() => push('BrowserView', { url: btn.url, })}
        />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Wrapper>
        <Loader
          animationType={'none'}
          color={'blue'}
          loading={this.state.loading}
          size={60}  // numeric value for this loader
          transparent
        />
        <Header titleText='Chapter 2 Tip 9' subTitleText='Web View'>
          Your Menu Here
        </Header>
        <Section>
            <Text>Hello this is the HOME PAGE!</Text>
        </Section>
        <View style={styles.content}>
          {this.state.links.map(this.renderButton)}
        </View>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    // flex: 1,
    margin: 10,
    backgroundColor: '#c0392b',
    borderRadius: 3,
    padding: 10,
    width: 200,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  }
});

export default createStackNavigator(
  {
    Home: MainApp,
    BrowserView,
  },
  {
    initialRouteName: 'Home',
  }
);
