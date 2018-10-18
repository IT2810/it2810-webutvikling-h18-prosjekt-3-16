import React, { Component } from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';


class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text>Description</Text>
            </View>
        );
    }
}

export default Home;