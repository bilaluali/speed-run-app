import { combineReducers } from 'redux';

import * as models from '../../models/redux';

const rootReducer = combineReducers({
    game: models.game.reducers,
    run: models.run.reducers
});

export default rootReducer;