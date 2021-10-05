import { filter } from 'lodash';

export const filterBy = (state, criteria) =>
    filter(state.game.entities, criteria);