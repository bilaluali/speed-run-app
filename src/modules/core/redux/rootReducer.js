import { combineReducers } from 'redux';

import * as models from '../../models/redux';

const rootReducer = combineReducers({
    game: models.game.reducers,
});

export default rootReducer;