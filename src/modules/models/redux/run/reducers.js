import { uniqBy } from 'lodash';
import { ADD_ENTITIES, REMOVE_ENTITIES } from './actions';

export const initialState = {
  entities: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        entities: uniqBy([...action.payload], 'id')
      };
    case REMOVE_ENTITIES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
 