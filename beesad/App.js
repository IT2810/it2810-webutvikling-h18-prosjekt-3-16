import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from "./Components/Todo";
import Pedometer from "./Components/Pedometer";

export default class App extends React.Component {
  render() {
    return (
        <Todo />
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
