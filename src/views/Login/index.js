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

import {errosAuth} from '../../utils/errors';

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
        const ref = database().ref(`/users/${res.user._user.uid}`);
        ref
          .once('value')
          .then(resp => {
            console.log(resp._snapshot.value);
          })
          .catch(err => {
            console.log(err);
            console.log(err.message);
            console.log(err.code);
          });
      })
      .catch(err => {
        Alert.alert('Erro', errosAuth[err.code || 'other'], [{text: 'Ok'}]);
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
          <TextTouch onPress={() => navigation.push('ForgotPassword')}>
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
