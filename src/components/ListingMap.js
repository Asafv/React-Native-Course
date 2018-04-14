import React, { Component } from 'react';
import { MapView, Location, Permissions } from 'expo';
import { View } from 'react-native';

import { Button, Icon } from 'react-native-elements';


class ListingMap extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.item.location,
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      region: null,
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      const { item } = this.props.navigation.state.params;
      const arr = await Location.geocodeAsync(item.location);
      const location = arr[0];
      // if (location) {
        const region = {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        };
        this.setState({region});
      Location.watchPositionAsync({
        enableHighAccuracy: true,
        timeInterval: 3000,
      }, this.positionChange)
      // }
      // else {
      //   Location.getCurrentPositionAsync({enableHighAccuracy: true})
      //   .then((res) => {
      //     console.log(res);
      //     const { latitude, longitude } = res.coords;
      //     const region = {
      //       latitude : latitude,
      //       longitude: longitude,
      //       latitudeDelta: 0.5,
      //       longitudeDelta: 0.5,
      //     };
      //     this.setState({region});
      //   }, (err) => {
      //     console.log(err);
      //   })
      // }
    }
  }

  positionChange = (data) => {
    console.log(data);
  };

  getCurrentLocation = async () => {
    const res = await Location.getCurrentPositionAsync({ enableHighAccuracy: true});
    console.log(res);
    const region = {
      latitude: res.latitude,
      longitude: res.longitude,
      latitudeDelta: res.accuracy,
      longitudeDelta: 10.5,
    };
    this.setState({region});
  };

  render() {
    const {region} = this.state;
    const { item } = this.props.navigation.state.params;
    return (
      <View style={{flex: 1}}>
        {region &&
        <MapView
          style={{flex: 1}}
          region={region}
        >
          <MapView.Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title={item.location}
            description={item.property_name}
          />
          <Button
            containerStyle={{ marginTop: 20, alignSelf: 'center' }}
            icon={
              <Icon
                name='my-location'
                size={15}
                color='white'
              />
            }
            title='Current Location'
            onPress={this.getCurrentLocation}
          />
        </MapView>
        }

      </View>
    );
  }
}

export default ListingMap;