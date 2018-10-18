import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import Todo from "./Todo";
import Tododo from "./Tododo";
import Home from "./Home";
import Calender from "./Calender";
import reactNativePedometer from "./Pedometer"

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
        Steps: {
            screen: reactNativePedometer,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="wc"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Calender: {
            screen: Calender,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="event"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },

    },
);

export default class Routing extends React.Component {
    render() {
        return <RootStack/>;
    }
}
