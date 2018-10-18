import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import Todo from "./Components/Todo";
import Pedometer from "./Components/Pedometer";
import Home from "./Components/Home";


/*list of icons can be found here: https://material.io/tools/icons/?style=baseline */
const RootStack = createBottomTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="home"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Todo: {
            screen: Todo,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="done"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },

    },
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
