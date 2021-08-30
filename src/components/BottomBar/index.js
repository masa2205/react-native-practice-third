import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomBar({handleLikePress, handlePassPress}) {
  return (
    <View style={styles.container}>
      <View />
      <TouchableOpacity style={styles.button} onPress={handlePassPress}>
        <Icon name="times" color="#F06795" size={30} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLikePress}>
        <Icon name="heart" color="#64EDCC" size={30} style={styles.icon} />
      </TouchableOpacity>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
});
