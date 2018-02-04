import React from 'react';
import { Text } from 'react-native';

const Header = (props) => {
  return (
    <Text style={[Styles.text, props.style]}>TODO LIST</Text>
  )
};

const Styles = {
  text: {
    fontSize: 20,
  }
};

export default Header;