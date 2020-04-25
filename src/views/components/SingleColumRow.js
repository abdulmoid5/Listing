import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../utils/Constants';
const styles = {
  infoRowStyle: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomColor: colors.lightGray,
    paddingBottom: 10,
  },
  placeHolderStyle: {
    color: colors.lightGray,
    fontSize: 12,
    marginBottom: 5,
  },
  infoRowInnerDetailStyle: {
    flexDirection: 'column',
  },
  valueTextStyle: {
    color: colors.blue,
  },
};

const SingleColumRow = ({placeholder, value, isUnderLine = true}) => (
  <View style={[styles.infoRowStyle, {borderBottomWidth: isUnderLine ? 1 : 0}]}>
    <View style={styles.infoRowInnerDetailStyle}>
      <Text style={styles.placeHolderStyle}>{placeholder}</Text>
      <Text style={styles.valueTextStyle}>{value}</Text>
    </View>
  </View>
);

export default SingleColumRow;
