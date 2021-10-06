import { uniqBy } from 'lodash';
import { ADD_GAME_ENTITIES, REMOVE_GAME_ENTITIES } from './actions';

export const initialState = {
  entities: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME_ENTITIES:
      return {
        ...state,
        entities: uniqBy([...action.payload], 'id')
      };
    case REMOVE_GAME_ENTITIES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
 