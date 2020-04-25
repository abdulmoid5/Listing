import React from 'react';
import {
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {colors} from '../../utils/Constants';
const {width} = Dimensions.get('window');
const styles = {
  headerStyle: {
    height: 143.57,
    justifyContent: 'flex-end',
    width: width * 1,
  },
  headerTextStyle: {
    fontSize: 22,
    margin: 5,
    color: colors.white,
    padding: 15,
    marginBottom: 8,
  },
  image: {
    height: 20,
    resizeMode: 'contain',
  },
  imageContainer: {
    marginLeft: 5,
    marginTop: 7,
  },
};

const ImageHeader = ({text, onPress, isBack = false}) => (
  <ImageBackground
    source={require('../../media/header.png')}
    style={styles.headerStyle}>
    <View style={{flexDirection: 'row'}}>
      {isBack && (
        <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
          <Image
            source={require('../../media/back.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      )}
      <Text
        style={[
          styles.headerTextStyle,
          {padding: isBack ? 0 : 15, marginBottom: isBack ? 20 : 10},
        ]}>
        {text}
      </Text>
    </View>
  </ImageBackground>
);

export default ImageHeader;
