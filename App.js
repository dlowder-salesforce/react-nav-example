import React from 'react';
import {
  AppRegistry,
  Button,
  View,
  Text,
  TVEventHandler,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class ChatScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Chat with User 2',
  };
  render() {
    return (
      <View>
        <Text>Hello, Chat App!</Text>
      </View>
    );
  }
}

class ChatScreen1 extends React.Component {
  static navigationOptions = {
    title: 'Chat with User 1',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat2')}
          title="Chat with User 2"
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat1')}
          title="Chat with User 1"
        />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat1: { screen: ChatScreen1 },
  Chat2: { screen: ChatScreen2 },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);

