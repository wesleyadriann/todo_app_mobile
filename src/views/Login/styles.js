import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.ImageBackground`
  width: ${width}px;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  background-color: #fff;
  width: 85%;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 25px;
`;

export const InputLogin = styled.TextInput`
  background-color: #fff;
  padding: 5px;
  width: 90%;
  height: 40px;
  margin: 5px;
  border-bottom-width: 2px;
  border-style: solid;
  border-color: #f0f0f0;
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: #fff;
  width: 90%;
  height: 40px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: #8e2de2;
`;

export const TextButton = styled.Text`
  color: #8e2de2;
`;

export const TextTouch = styled.TouchableOpacity`
  margin-top: 10px;
`;
