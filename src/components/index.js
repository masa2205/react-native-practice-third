import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const Card = props => {
  const {image, userName, userIntroduction} = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground source={{uri: image}} style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userIntroduction}>{userIntroduction}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  userName: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  userIntroduction: {
    fontSize: 20,
    color: 'white',
    lineHeight: 30,
  },
});

export default Card;
