import React from 'react';
import {View, Text} from 'react-native';

const Task = ({navigation}) => {
  const task = navigation.getParam('task', {});
  console.log(task);
  return (
    <View>
      <Text>Nome: {task.name}</Text>
      <Text>Descrição: {task.description}</Text>
      <Text>Tipo: {task.type}</Text>
      <Text>Prioridade: {task.priority}</Text>
    </View>
  );
};

export default Task;
