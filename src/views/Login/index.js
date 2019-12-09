import React from 'react';
import {Alert, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {handleChange, handleLoading} from '../../store/actions/auth';

import LoadingFullScreen from '../../components/LoadingFullScreen';
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
  const loading = useSelector(state => state.auth.loading);

  const handleLogin = () => {
    if (!(user.email || user.password)) {
      return Alert.alert('Erro', 'Informe email e senha.', [{text: 'Ok'}]);
    }

    dispatch(handleLoading(true));
    auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        console.log(err.code);
        console.log(err.message);
      })
      .finally(() => {
        dispatch(handleLoading(false));
      });
  };

  const onHandleChange = (text, name) => {
    dispatch(handleChange(text, name));
  };

  return (
    <>
      <LoadingFullScreen status={loading} />
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
          <TextTouch onPress={() => navigation.push('CreateAccount')}>
            <Text>Cadastre-se</Text>
          </TextTouch>
        </Row>
      </Container>
    </>
  );
};

export default Login;
