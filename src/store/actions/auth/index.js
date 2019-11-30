import actionTypes from '../../actionTypes/auth';

export const handleChange = (text, name) => {
  return {
    type: actionTypes.HANDLECHANGEAUTH,
    name,
    text,
  };
};
