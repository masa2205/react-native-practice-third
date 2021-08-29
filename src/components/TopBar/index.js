import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Icon name="fire" color="#F06795" size={30} style={styles.icon} />
      <Icon name="comments" color="#5c5c5c" size={30} style={styles.icon} />
      <Icon name="user" color="#5c5c5c" size={30} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
