import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Avatar, Text, PricingCard, Rating } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';


class ListingInfo extends Component {

  constructor(props) {
    super(props);
    const { item } = this.props.navigation.state.params;
    this.state = {
      rating: item.rating,
    };
  }
  navToMap = () => {
    const { item } = this.props.navigation.state.params;
    this.props.navigation.navigate('ListingMap', { item });
  };

  componentWillMount() {
    const { item } = this.props.navigation.state.params;

    AsyncStorage.getItem(item.id+'').then(rating => {
      if (rating) {
        this.setState({rating: rating * 1});
      }
    });
  }

  render() {
    const { item } = this.props.navigation.state.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 10  }}>
        <Avatar
          xlarge
          rounded
          source={{uri: item.avatar}}
          onPress={() => console.log("Works fine!!")}
          activeOpacity={0.7}
        />
        <Text h1>{this.state.rating}</Text>
        <Rating
          showRating
          type="star"
          startingValue={this.state.rating}
          onFinishRating={(newRating) => {
            AsyncStorage.setItem(item.id+'', newRating+'');
          }}
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