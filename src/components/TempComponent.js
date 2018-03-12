import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, View, StyleSheet } from 'react-native';
import { getList } from '../actions/TempActions';
import { List, ListItem, Header, Icon } from 'react-native-elements'

class TempComponent extends Component {

  componentWillMount() {
    this.props.getList();
  }

  render() {
    const { list } = this.props;
    return (
      <View style={Styles.container}>
        <Header
          leftComponent={<Icon color={'white'} name='menu' />}
          centerComponent={{ text: 'My Friends', style: { color: '#fff' } }}
          rightComponent={<Icon color={'orange'} name='home' />}
        />
        <ScrollView style={Styles.listContainer}>
          <List containerStyle={{ marginTop: 10 }}>
            {
              list.map((item, i) => (
                <ListItem
                  roundAvatar
                  avatar={{ uri: item.avatar }}
                  key={i}
                  title={item.property_name}
                  subtitle={item.location}
                  rightIcon={<Icon name='chevron-right' />}
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

export default connect(mapStateToProps, mapDispatchToProps)(TempComponent);