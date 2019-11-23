import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import {Container, Card, ButtonAdd, ActionBar} from './style';

const Home = ({navigation}) => {
  const tasks = useSelector(state => state.todo.tasks);

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
              <Text>{task.name}</Text>
              <Text>{task.priority}</Text>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ActionBar>
        <ButtonAdd />
      </ActionBar>
    </Container>
  );
};

export default Home;
