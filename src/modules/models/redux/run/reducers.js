import { uniqBy } from 'lodash';
import { ADD_RUN_ENTITIES, REMOVE_RUN_ENTITIES } from './actions';

export const initialState = {
  entities: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RUN_ENTITIES:
      return {
        ...state,
        entities: uniqBy([
          ...state.entities,
          ...action.payload
        ], 'id')
      };
    case REMOVE_RUN_ENTITIES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;