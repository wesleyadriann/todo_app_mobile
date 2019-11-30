import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import {Container, Card, ButtonAdd, ActionBar, ImagePriority} from './styles';

const Home = ({navigation}) => {
  const tasks = useSelector(state => state.todo.tasks);

  const detailTask = task => {
    navigation.push('Task', {
      task,
    });
  };

  const createTask = () => {
    navigation.push('CreateTask');
  };

  return (
    <Container>
      <ScrollView>
        {tasks.map((task, i) => (
          <TouchableOpacity onPress={() => detailTask(task)}>
            <Card key={i}>
              <Text>{task.name}</Text>
              <ImagePriority
                priority={task.priority}
                source={require('../../assets/images/uparrow.png')}
              />
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ActionBar>
        <ButtonAdd onPress={createTask} />
      </ActionBar>
    </Container>
  );
};

export default Home;
