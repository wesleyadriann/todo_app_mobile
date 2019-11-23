import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';

import {Container, Card} from './style';

import {tasks} from '../../utils/tasks';

const Home = ({navigation}) => {
  const moveScreen = task => {
    navigation.push('Task', {
      task,
    });
  };

  return (
    <Container>
      <ScrollView>
        {tasks.map((task, i) => (
          <TouchableOpacity onPress={() => moveScreen(task)}>
            <Card key={i}>
              <Text>Nome: {task.name} </Text>
              {/* <Text>{task.description}</Text> */}
              <Text>Tipo: {task.type} </Text>
              <Text>Prioridade: {task.priority} </Text>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Home;
