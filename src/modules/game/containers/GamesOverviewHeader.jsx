import * as React from 'react';
import { useSelector } from 'react-redux';

import * as models from '../../models/redux';
import GamesOverviewHeader from '../components/GamesOverviewHeader';

const GamesOverviewHeaderContainer = (props) => {
    const games = useSelector(
        state => models.game.selectors.filterBy(state, {})
    );
        
    return (
        <GamesOverviewHeader
            {...props}
            primary={`Games`}
            secondary={`${games.length} items`}
        />
    );
};

export default GamesOverviewHeaderContainer;