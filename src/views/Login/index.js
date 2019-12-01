import React from 'react';
import {Alert, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {handleChange} from '../../store/actions/auth';
import {users} from '../../utils/data';

import {
  Container,
  Row,
  InputLogin,
  ButtonLogin,
  Title,
  TextButton,
  TextTouch,
} from './styles';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogin = () => {
    if (!(user.email || user.password)) {
      return Alert.alert('Erro', 'Informe email e senha.', [{text: 'Ok'}]);
    }
    let index = '';
    users.map((userData, i) => {
      if (user.email === userData.email) {
        index = i;
      }
    });
    if (index === '') {
      return Alert.alert('Erro', 'Email não encontrado.');
    }
    if (user.password === users[index].password) {
      navigation.push('Home');
    } else {
      Alert.alert('Erro', 'Email ou senha invalidos.');
    }
  };

  const onHandleChange = (text, name) => {
    dispatch(handleChange(text, name));
  };

  return (
    <Container source={require('../../assets/images/background.png')}>
      <Row>
        <Title>Faça seu Login</Title>
        <InputLogin
          placeholder="Email"
          onChangeText={text => onHandleChange(text, 'email')}
        />
        <InputLogin
          placeholder="Senha"
          secureTextEntry
          onChangeText={text => onHandleChange(text, 'password')}
        />
        <ButtonLogin onPress={handleLogin}>
          <TextButton>Entrar</TextButton>
        </ButtonLogin>
        <TextTouch>
          <Text>Esqueceu a senha?</Text>
        </TextTouch>
        <TextTouch>
          <Text>Cadastre-se</Text>
        </TextTouch>
      </Row>
    </Container>
  );
};

export default Login;
