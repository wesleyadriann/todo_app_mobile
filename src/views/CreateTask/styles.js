import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  height: 100%;
  padding: 10px;
  background: #f5f5f5;
`;
