import React from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';

import {handleChange} from '../../store/actions/auth';

import {
  Container,
  Row,
  Title,
  InputLogin,
  ButtonLogin,
  TextButton,
} from './style';

import {errosAuth} from '../../utils/errors';

const CreateAccount = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const onHandleChange = (text, name) => {
    dispatch(handleChange(text, name));
  };

  const handleCreate = () => {
    if (!(user.email || user.password || user.name)) {
      return Alert.alert('Erro', 'Informe email, nome e senha.', [
        {text: 'Ok'},
      ]);
    }
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        Alert.alert('Sucesso', 'Sua conta foi criada com sucesso', [
          {
            text: 'Ok',
            onPress: () => navigation.push('Login'),
          },
        ]);
      })
      .catch(err => {
        Alert.alert('Erro', errosAuth[err.code], [{text: 'Ok'}]);
      });
  };

  return (
    <Container source={require('../../assets/images/background.png')}>
      <Row>
        <Title>Cadastro</Title>
        <InputLogin
          placeholder="Email"
          onChangeText={text => onHandleChange(text, 'email')}
        />
        <InputLogin
          placeholder="Nome"
          onChangeText={text => onHandleChange(text, 'name')}
        />
        <InputLogin
          placeholder="Senha"
          secureTextEntry
          onChangeText={text => onHandleChange(text, 'password')}
        />
        <ButtonLogin onPress={handleCreate}>
          <TextButton>Cadastrar</TextButton>
        </ButtonLogin>
      </Row>
    </Container>
  );
};

export default CreateAccount;
