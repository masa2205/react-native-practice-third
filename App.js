import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  useWindowDimensions,
} from 'react-native';
import Card from './src/components/';
import users from './assets/data/users';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useAnimatedGestureHandler,
  interpolate,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const ROTATION = 60;

const App = () => {
  const {width: screenWidth} = useWindowDimensions();
  const hiddenTranslateX = 2 * screenWidth;
  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
      'deg',
  );
  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));
  const gesturehandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: () => {
      console.warn('Touch ended');
    },
  });
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gesturehandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          <Card user={users[0]} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedCard: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
