import { filter } from 'lodash';

export const filterBy = (state, criteria) =>
    filter(state.run.entities, criteria);