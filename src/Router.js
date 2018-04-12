import React from 'react';
import { StackNavigator } from 'react-navigation';
import ListingList from './components/ListingList';
import ListingInfo from './components/ListingInfo';
import ListingMap from './components/ListingMap';
import { Icon } from 'react-native-elements';

const HomeNav = StackNavigator({
  Listings: {
    screen: ListingList,
    navigationOptions: {
      headerRight: <Icon color={'orange'} name='home' />,
      headerLeft: <Icon color={'white'} name='menu' />,
      title: 'Listings',
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
    },
  },
  ListingInfo: {
    screen: ListingInfo,
    navigationOptions: {
      title: 'Listing Info',
    },
  },
  ListingMap: {
    screen: ListingMap,
    // navigationOptions: {
      //title: 'Listing Map',
    // },
  }
});

export default HomeNav;