import actionTypes from '../../actionTypes/auth';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
    name: '',
  },
  loading: false,
};

function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.HANDLECHANGEAUTH:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.text,
        },
      };
    case actionTypes.HANDLELOADINGAUTH:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
}

export default auth;
