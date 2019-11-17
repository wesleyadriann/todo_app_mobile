import React from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';

import store from './store';

const App = () => (
  <Provider store={store}>
    <View>
      <Text>Welcome to Native</Text>
    </View>
  </Provider>
);

export default App;
