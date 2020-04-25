import React from 'react';
import {View, Text} from 'react-native';
const styles = {
  headingView: {
    marginTop: 20,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '400',
  },
};

const Heading = ({text}) => (
  <View style={styles.headingView}>
    <Text style={styles.textStyle}>{text}</Text>
  </View>
);

export default Heading;
