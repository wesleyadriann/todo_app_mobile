import {tasks} from '../../../utils/tasks';

const INITIAL_STATE = {
  tasks,
};

function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default todo;
