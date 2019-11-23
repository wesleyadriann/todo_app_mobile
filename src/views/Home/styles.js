import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import {colors} from '../../utils/colors';

const filters = {
  low: 'invert(55%) sepia(87%) saturate(634%) hue-rotate(192deg) brightness(104%) contrast(103%)',
  medium: 'invert(84%) sepia(63%) saturate(2434%) hue-rotate(3deg) brightness(109%) contrast(107%)',
  high: 'invert(14%) sepia(87%) saturate(7313%) hue-rotate(7deg) brightness(96%) contrast(122%)',
};

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
  align-items: center;
  box-shadow: 4px 4px 4px black;
`;

export const ImagePriority = styled.Image`
  width: 20px;
  height: 20px;
  /* filter: ${props => filters[props.priority]}; */
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
