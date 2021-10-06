import * as actions from './actions';
import sanitize from './helpers/sanitize';

export const addEntities = payload => ({
    type: actions.ADD_ENTITIES,
    payload: sanitize(payload)
});

export const removeEntities = () => ({
    type: actions.REMOVE_ENTITIES
});