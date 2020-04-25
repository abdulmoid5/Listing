import React, {Component} from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/UserActions';
import {screenKeys} from '../utils/Constants';
import ImageHeader from './components/ImageHeader';
import ListItem from './components/ListItem';

const styles = {
  scrollViewStyle: {
    marginBottom: 20,
    marginTop: 20,
  },
};

class UserList extends Component {
  componentDidMount = () => {
    const {actions} = this.props;
    actions.getUsers();
  };

  renderUser = item => {
    return (
      <ListItem
        item={item}
        key={item.id}
        onPress={() => this.rowItemPress(item)}
      />
    );
  };

  rowItemPress = item => {
    const {actions} = this.props;
    actions.setSelectedUser(item);
    this.props.navigation.navigate(screenKeys.UserDetail);
  };

  render = () => {
    const {usersList} = this.props;
    return (
      <View style={{margin: 0, padding: 0}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ImageHeader text="USERS" />
        <ScrollView style={styles.scrollViewStyle}>
          {usersList.map(item => this.renderUser(item))}
        </ScrollView>
      </View>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}
const mapStateToProps = ({userReducer}) => {
  const {usersList} = userReducer;
  return {usersList};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
