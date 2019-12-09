import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {Container, Text} from './style';

const LoadingFullScreen = ({status, message = ''}) => (
  <View>
    {status ? (
      <Container>
        <ActivityIndicator size="large" color="#8E2DE2" />
        <Text>{message}</Text>
      </Container>
    ) : (
      <View />
    )}
  </View>
);

export default LoadingFullScreen;
