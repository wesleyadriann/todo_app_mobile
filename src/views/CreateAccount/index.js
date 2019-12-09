import React from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

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
      .then(res => {
        const ref = database().ref(`/users/${res.user._user.uid}`);
        ref
          .set({
            uid: res.user._user.uid,
            name: user.name,
            tasks: [],
          })
          .then(() => {
            Alert.alert('Sucesso', 'Sua conta foi criada com sucesso', [
              {
                text: 'Ok',
                onPress: () => navigation.push('Login'),
              },
            ]);
          })
          .catch(() => {
            Alert.alert('Erro', errosAuth.other, [{text: 'Ok'}]);
          });
      })
      .catch(err => {
        Alert.alert('Erro', errosAuth[err.code || 'other'], [{text: 'Ok'}]);
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
