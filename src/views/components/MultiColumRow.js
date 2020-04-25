import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {colors} from '../../utils/Constants';
const {width} = Dimensions.get('window');
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
    width: width * 0.43,
  },
  valueTextStyle: {
    color: colors.blue,
  },
};

const MultiColumRow = ({
  placeholderLeft,
  valueLeft,
  placeholderRight,
  valueRight,
  isUnderLine = true,
}) => (
  <View style={[styles.infoRowStyle, {borderBottomWidth: isUnderLine ? 1 : 0}]}>
    <View style={styles.infoRowInnerDetailStyle}>
      <Text style={styles.placeHolderStyle}>{placeholderLeft}</Text>
      <Text style={styles.valueTextStyle}>{valueLeft}</Text>
    </View>
    <View style={styles.infoRowInnerDetailStyle}>
      <Text style={styles.placeHolderStyle}>{placeholderRight}</Text>
      <Text style={styles.valueTextStyle}>{valueRight}</Text>
    </View>
  </View>
);

export default MultiColumRow;
