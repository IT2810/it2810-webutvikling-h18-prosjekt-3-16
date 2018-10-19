import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    geolocation,
} from 'react-native';

import MapView from 'react-native-maps';


const options = {
    enableHighAccuracy: true,
    maximumAge: 0
};

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 63.4213704,
            lon: 10.3947577,
        };
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.geo_success, this.geo_error, options);
    }
    componentDidUpdate(){
        navigator.geolocation.getCurrentPosition(this.geo_success, this.geo_error, options);
    }
    render() {
        return (
            <View style={styles.container}>

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 63.4213704,
                        longitude: 10.3947577,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.lat,
                            longitude: this.state.lon,
                        }}
                    >
                        <View style={styles.radius}>
                            <View style={styles.marker} />
                        </View>
                    </MapView.Marker>


                </MapView>

            </View>
        );
    }

    geo_success = (pos) => {
        const coord = pos.coords;
        this.setState({
            lat: coord.latitude,
            lon: coord.longitude,
        });
        console.log(coord.latitude);
        console.log(coord.longitude);
    };

    geo_error = (e) => {
        console.log('klarte ikke kartgreia');
        console.log(`Feilmelding: ${e}`);
    };

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
    },
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0, 122, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007AFF',
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