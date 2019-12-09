import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  min-height: ${height}px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.1);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
`;

export const Text = styled.Text`
  color: #000;
`;
