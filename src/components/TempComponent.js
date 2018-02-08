import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import { tempAction } from '../actions/TempActions';

class TempComponent extends Component {

  componentWillMount() {
    this.props.tempAction(5);
  }

  render() {
    const { tempField } = this.props;
    console.log('tempField: ', tempField);
    return (
      <View>
        <Text>
          Hi from Temp Component
        </Text>
      </View>
    );
  }

}

const mapStateToProps = (state) => {
  return { tempField: state.temp.tempField };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    tempAction,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TempComponent);