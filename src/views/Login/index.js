import React from 'react';

import {
  Container,
  Row,
  InputLogin,
  ButtonLogin,
  Title,
  TextButton,
} from './styles';

const Login = () => {
  return (
    <Container source={require('../../assets/images/background.png')}>
      <Row>
        <Title>Faça seu Login</Title>
        <InputLogin placeholder="Email" />
        <InputLogin placeholder="Senha" />
        <ButtonLogin>
          <TextButton>Entrar</TextButton>
        </ButtonLogin>
      </Row>
    </Container>
  );
};

export default Login;
