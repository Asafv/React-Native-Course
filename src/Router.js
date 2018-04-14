import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ListingList from './components/ListingList';
import ListingInfo from './components/ListingInfo';
import ListingMap from './components/ListingMap';
import { Icon } from 'react-native-elements';
import ListingCamera from "./components/ListingCamera";
import ListingImage from './components/ListingImage';
const enumScreens = {
  Listings: 'Listings',
};

const HomeNav = StackNavigator({
  [enumScreens.Listings]: {
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
  // ListingInfo: {
  //   screen: ListingInfo,
  //   navigationOptions: {
  //     title: 'Listing Info',
  //   },
  // },
  ListingInfo: {
    screen: TabNavigator(
      {
        Details: {
          screen: ListingInfo,
          navigationOptions: {
            tabBarLabel: 'Details',
            tabBarIcon: (<Icon name={'details'} size={25} color={'red'}/>),
          }
        },
        Camera: {
          screen: ListingCamera,
          navigationOptions: {
            tabBarLabel: 'Camera',
            tabBarIcon: (<Icon name={'camera'} size={25} color={'red'}/>),
          }
        },
      }),
  },
  ListingMap: {
    screen: ListingMap,
    // navigationOptions: {
      //title: 'Listing Map',
    // },
  },
  ListingImage: {
    screen: ListingImage,
    title: 'Snapshot',
  },
});

export default HomeNav;