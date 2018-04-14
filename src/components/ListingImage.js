
import React, { Component } from 'react';
import { View, Image } from 'react-native';


class ListingImage extends Component {


  render() {
    const { photo } = this.props.navigation.state.params;

    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: photo.uri }}
        />
      </View>
    );
  }
}

export default ListingImage;