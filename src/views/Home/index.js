import React from 'react';
import {View, Text} from 'react-native';

import {tasks} from '../../utils/tasks';

const Home = () => (
  <View>
    <Text>Welcome to Native</Text>
    {tasks.map(task => (
      <View>
        <Text>{task.name}</Text>
        <Text>{task.description}</Text>
        <Text>{task.type}</Text>
        <Text>{task.priority}</Text>
      </View>
    ))}
  </View>
);

export default Home;
