import * as actions from './actions';

export const addEntities = payload => ({
    type: actions.ADD_ENTITIES,
    payload
});

export const removeEntities = () => ({
    type: actions.ADD_ENTITIES
});