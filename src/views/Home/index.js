import React from 'react';
import {ScrollView, Text} from 'react-native';

import {Container, ContainerItem, Card} from './style';

import {tasks} from '../../utils/tasks';

const Home = () => (
  <Container>
    <ScrollView>
      {tasks.map(task => (
        <Card>
          <Text>{task.name}</Text>
          <Text>{task.description}</Text>
          <Text>{task.type}</Text>
          <Text>{task.priority}</Text>
        </Card>
      ))}
    </ScrollView>
  </Container>
);

export default Home;
