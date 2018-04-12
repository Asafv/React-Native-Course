import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, View, StyleSheet } from 'react-native';
import { getList } from '../actions/ListingActions';
import { List, Header, Icon } from 'react-native-elements'
import ListingItem from './ListingItem';


class ListingList extends Component {

  componentWillMount() {
    this.props.getList();
  }

  onPressItem = (item) => {
    this.props.navigation.navigate('ListingInfo', { item });
  };

  render() {
    const { list } = this.props;
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.listContainer}>
          <List containerStyle={{ marginTop: 10 }}>
            {
              list.map((item, i) => (
                <ListingItem
                  item={item}
                  onPressItem={this.onPressItem}
                  key={i}
                />
              ))
            }
          </List>
        </ScrollView>
        {/*<Icon*/}
          {/*size={26}*/}
          {/*type={'feather'}*/}
          {/*raised*/}
          {/*name='plus'*/}
          {/*color='red'*/}
          {/*containerStyle={Styles.fab}*/}
          {/*onPress={() => console.log('press!')}*/}
        {/*/>*/}
      </View>
    );
  }

}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
  fab: {
    backgroundColor: 'pink',
    position: 'absolute',
    bottom: 20,
    right: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(ListingList);