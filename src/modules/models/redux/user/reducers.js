import { uniqBy } from 'lodash';
import { ADD_USER_ENTITIES, REMOVE_USER_ENTITIES } from './actions';

export const initialState = {
  entities: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_ENTITIES:
      return {
        ...state,
        entities: uniqBy([
          ...state.entities,
          ...action.payload
        ], 'id')
      };
    case REMOVE_USER_ENTITIES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;