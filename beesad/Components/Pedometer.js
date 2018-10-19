import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    AppRegistry,
} from 'react-native';

const Pedometer = require('react-native-pedometer');

export default class reactNativePedometer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            numberOfSteps: 0,
            distance: 0,
            floorsAscended: 0,
            floorsDescended: 0,
            currentPace: 0,
            currentCadence: 0,
            test: isPaceAvailable(),
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.status}>
                    num
                </Text>
                <Text style={styles.status}>
                    some
                </Text>
                <Text style={styles.status}>
                    lol
                </Text>
                <Text style={styles.instructions}>
                    Just keep your phone in your pocket and go for a walk!
                    {this.state.test}
                </Text>
            </View>
        );
    }
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('reactNativePedometer', () => reactNativePedometer);
