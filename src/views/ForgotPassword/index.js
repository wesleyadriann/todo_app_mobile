import React from 'react';
import {Alert, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {handleChange, handleLoading} from '../../store/actions/auth';

import LoadingFullScreen from '../../components/LoadingFullScreen';
import {
  Container,
  Row,
  Title,
} from './style';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.auth.loading);

  return (
    <>
      <LoadingFullScreen status={loading} />
      <Container source={require('../../assets/images/background.png')}>
        <Row>
          <Title>Recuperação de Conta</Title>
        </Row>
      </Container>
    </>
  );
};

export default ForgotPassword;
