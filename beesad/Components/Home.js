import React, { Component } from 'react';
import { Text, Button, StyleSheet, View, Image } from 'react-native';


class Home extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    style={{width: 200, height: 200}}
                    source={require('../assets/img/beesad_logo.jpg')}
                />
                <Text style={{fontSize: 40}}>BeeSad</Text>
                <Text style={{textAlign:'center'}}>
                    Welcome to your journey into sadness and despair. With this app we will motivate you too live the most miserable life you kan possible imagine. {"\n"}
                    The application is not quite finished, we did some user testing and got depressed. But feel free to send a pull request on github.
                </Text>
            </View>
        );
    }
}

export default Home;