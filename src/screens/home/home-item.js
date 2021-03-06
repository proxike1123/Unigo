import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {sizeFont, sizeHeight, sizeWidth} from '../../helpers/size.helper';
import {appColor} from '../../constants/app.constant';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

export default class HomeItem extends Component {
  render() {
    const {icon, title, onPress, block} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {icon ? (
          <Image source={icon} style={styles.image} resizeMode="contain" />
        ) : (
          <Icon2
            name="filetext1"
            size={40}
            color={appColor.primary}
            style={styles.image}
          />
        )}
        <Text style={styles.text}>{title}</Text>
        {block ? (
          <View
            style={{
              position: 'absolute',
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              width: '100%',
              height: '100%',
              borderRadius: sizeHeight(10),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="lock" size={35} color="red" />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 6,
    height: sizeWidth(100),
    width: sizeWidth(100),
    borderRadius: sizeHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: sizeWidth(40),
    width: sizeWidth(40),
    tintColor: appColor.primary,
    marginBottom: sizeHeight(8),
  },
  text: {
    fontSize: sizeFont(14),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
