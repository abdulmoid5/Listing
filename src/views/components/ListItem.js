import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {colors} from '../../utils/Constants';
const styles = {
  rowStyle: {
    height: 50,
    borderColor: colors.lightGray,
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: colors.blue,
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
};

const ListItem = ({item, onPress}) => (
  <TouchableOpacity style={styles.rowStyle} onPress={onPress}>
    <Text style={styles.textStyle}>{item.name}</Text>
  </TouchableOpacity>
);

export default ListItem;
