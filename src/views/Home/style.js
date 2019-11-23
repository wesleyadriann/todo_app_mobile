import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  height: ${height}px;
  padding: 10px;
  background: #8e2de2;
`;

export const Card = styled.View`
  border-radius: 7px;
  margin: 5px;
  padding: 5px;
  background-color: #fff;
  flex-direction: row;
`;
