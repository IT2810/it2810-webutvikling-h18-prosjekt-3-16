import React from 'react';
import {
    StyleSheet,
    View,
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

    // geo functions here run returns a position object and passes it to geo_success
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
                        // Sets where the map is set in init state
                        latitude: this.state.lat,
                        longitude: this.state.lon,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            // sets and updates the location marker (blue dot)
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

    // geo_succsess recieves geo object and updates state
    geo_success = (pos) => {
        const coord = pos.coords;
        this.setState({
            lat: coord.latitude,
            lon: coord.longitude,
        });
    };

    // if geo function fails, then this function is run
    geo_error = (e) => {
        console.log(`Feilmelding: ${e}`);
    };

};

// Styles used:
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    // Setting the map to fullscreen:
    map: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
    },
    // radius and marker sets up a custom marker to mimic the blue dot with a circle around it
    // that we all recognise as our own location
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
});