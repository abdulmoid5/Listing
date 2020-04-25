import React, {Component} from 'react';
import {Text, View, ScrollView, StatusBar} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/UserActions';
import ImageHeader from './components/ImageHeader';
import MultiColumRow from './components/MultiColumRow';
import SingleColumRow from './components/SingleColumRow';
import Heading from './components/Heading';
import {colors} from '../utils/Constants';
const styles = {
  scrollViewStyle: {
    marginBottom: 20,
    marginTop: 20,
    padding: 20,
  },
};

class UserDetail extends Component {
  render = () => {
    const {selectedUser, navigation} = this.props;
    return (
      <View>
        <StatusBar backgroundColor={colors.blue} barStyle="light-content" />
        <ImageHeader
          text="USER INFORMATION"
          isBack
          onPress={() => navigation.goBack()}
        />
        <ScrollView style={styles.scrollViewStyle}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: colors.blue}}>User ID: </Text>
            <Text>{selectedUser.id}</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              {selectedUser.name}
            </Text>
          </View>
          <MultiColumRow
            placeholderLeft="Username"
            valueLeft={selectedUser.username}
            placeholderRight="Email"
            valueRight={selectedUser.email}
          />
          <Heading text="Address" />
          <MultiColumRow
            placeholderLeft="Street"
            valueLeft={selectedUser.address.street}
            placeholderRight="Suite"
            valueRight={selectedUser.address.suite}
            isUnderLine={false}
          />
          <MultiColumRow
            placeholderLeft="City"
            valueLeft={selectedUser.address.city}
            placeholderRight="Zip Code"
            valueRight={selectedUser.address.zipcode}
          />
          <MultiColumRow
            placeholderLeft="Phone"
            valueLeft={selectedUser.phone}
            placeholderRight="Website"
            valueRight={selectedUser.website}
            isUnderLine={false}
          />
          <Heading text="Company" />
          <MultiColumRow
            placeholderLeft="Name"
            valueLeft={selectedUser.company.name}
            placeholderRight="Business"
            valueRight={selectedUser.company.bs}
            isUnderLine={false}
          />
          <SingleColumRow
            placeholder="Catch Phrase"
            value={selectedUser.company.catchPhrase}
            isUnderLine={false}
          />
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
  const {selectedUser} = userReducer;
  return {selectedUser};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetail);
