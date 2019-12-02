import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {handleChange} from '../../store/actions/auth';

import {
  Container,
  Row,
  Title,
  InputLogin,
  ButtonLogin,
  TextButton,
} from './style';

const CreateAccount = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const onHandleChange = (text, name) => {
    dispatch(handleChange(text, name));
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
        <ButtonLogin>
          <TextButton>Cadastrar</TextButton>
        </ButtonLogin>
      </Row>
    </Container>
  );
};

export default CreateAccount;
