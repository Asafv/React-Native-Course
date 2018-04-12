import React from 'react';
import { ListItem, Icon } from 'react-native-elements';
import uuidv4 from 'uuid/v4';

const ListingItem = ({ item, onPressItem }) => {
  const key = uuidv4();
  return (
    <ListItem
      roundAvatar
      avatar={{uri: item.avatar}}
      key={key}
      title={item.property_name}
      subtitle={item.location}
      rightIcon={<Icon name='chevron-right'/>}
      onPress={() => onPressItem(item)}
    />
  );
};

export default ListingItem;