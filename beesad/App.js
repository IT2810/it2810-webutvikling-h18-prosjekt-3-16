import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from "./Components/Todo";
import NavTest from "./Components/NavTest";
import {createStackNavigator} from 'react-navigation';

const RootStack = createStackNavigator({
    Home: {screen: NavTest},
    Todo: {screen: Todo},
},  {
    initialRouteName: 'Todo',
}
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

const styles = StyleSheet.create({
  container: {

  },
});
