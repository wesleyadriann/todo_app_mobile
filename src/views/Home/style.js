import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import {colors} from '../../utils/colors';

export const Container = styled.View`
  width: ${width}px;
  height: 100%;
  padding: 10px;
  background: ${colors['f5f5f5']};
`;

export const Card = styled.View`
  border-radius: 7px;
  margin: 5px;
  padding: 15px 10px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 4px 4px 4px black;
`;

export const ActionBar = styled.View`
  align-items: center;
  justify-content: center;
  height: 90px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${colors['3b8ac4']};
  border-radius: 100px;
`;
