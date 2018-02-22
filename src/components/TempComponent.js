import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { getList } from '../actions/TempActions';

class TempComponent extends Component {

  componentWillMount() {
    this.props.getList();
  }

  render() {
    const Separator = () => <View style={{height: 10}} />;
    const { list } = this.props;
    return (
      <View style={Styles.container}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={list}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) =>
            <View style={Styles.listItemContainer}>
              <Image style={Styles.img} source={{ uri: item.avatar }} />
              <Text>{item.property_name}</Text>
            </View>
          }
        />
      </View>
    );
  }

}

const Styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
  img: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});

const mapStateToProps = (state) => {
  return { list: state.listReducer.list };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getList,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TempComponent);