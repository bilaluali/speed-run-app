import { filter } from 'lodash';

export const filterBy = (state, criteria) =>
    filter(state.user.entities, criteria);