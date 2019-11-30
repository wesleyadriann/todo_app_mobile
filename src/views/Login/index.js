import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {handleChange} from '../../store/actions/auth';

import {
  Container,
  Row,
  InputLogin,
  ButtonLogin,
  Title,
  TextButton,
} from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogin = () => {
    alert(JSON.stringify(user));
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
          onChangeText={text => onHandleChange(text, 'password')}
        />
        <ButtonLogin onPress={handleLogin}>
          <TextButton>Entrar</TextButton>
        </ButtonLogin>
      </Row>
    </Container>
  );
};

export default Login;
