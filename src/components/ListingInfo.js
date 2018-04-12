import React, { Component } from 'react';
import { View } from 'react-native';
import { Avatar, Text, PricingCard, Rating } from 'react-native-elements';


class ListingInfo extends Component {

  navToMap = () => {
    const { item } = this.props.navigation.state.params;
    this.props.navigation.navigate('ListingMap', { item });
  };

  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 10  }}>
        <Avatar
          xlarge
          rounded
          source={{uri: item.avatar}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Rating
          showRating
          type="star"
          startingValue={item.rating}
          onFinishRating={() => {}}
          style={{ paddingVertical: 10 }}
        />
        <PricingCard
          color='#4f9deb'
          title={item.property_name}
          price={`$${item.price}`}
          info={[]}
          button={{
            title: item.location,
            icon: 'add-location',
          }}
          onButtonPress={this.navToMap}
        />
      </View>
    );
  }
}

export default ListingInfo;