import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Header, Wrapper, Section, Loader } from './components/common';

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

  renderScene = (route, navigate) => {
    return (
      <View style={styles.content}>
        <Text>Home</Text>
        <View>
          {this.state.links.map(this.renderButton)}
        </View>
      </View>
    );
  };

  renderButton = (btn, index) => {
    console.log(btn);
    return (
      <TouchableOpacity key={index} style={styles.btn} >
        <Button title={btn.title} onPress={() => console.log(btn.url)} />
      </TouchableOpacity>
    );
  };

  onPressButton(url) {
    this.props.navigation.push(url);
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
  },
  {
    initialRouteName: 'Home',
  }
);
