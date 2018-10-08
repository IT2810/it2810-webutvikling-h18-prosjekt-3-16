import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import Todo from "./Components/Todo";
import Routing from "./Components/Routing";


const RootStack = createBottomTabNavigator({
        Home: {screen: Routing},
        Todo: {screen: Todo},
    },
    {
        initialRouteName: 'Home',
    },
    /*this needs styling, the styling don't work*/
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'a') {
                    iconName = <Icon name='rowing' />;
                } else if (routeName === 'b') {
                    iconName = <Icon name='rowing' />;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
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
