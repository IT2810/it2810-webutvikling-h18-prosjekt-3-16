import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import Todo from "./Todo";
import Home from "./Home";
import Calender from "./Calender";
import Map from "./Map";

/*list of icons can be found here: https://material.io/tools/icons/?style=baseline */
//creates a naviagtion bar at the bottom of the app. switches screen when button is pressed
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
        Goals: {
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
        Map: {
            screen: Map,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="map"
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
