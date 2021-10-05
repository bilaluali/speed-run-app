import * as React from 'react';
import { useSelector } from 'react-redux';

import GamesOverview from '../components/GamesOverview';
import * as models from '../../models/redux';


const GamesOverviewContainer = (props) => {
    const games = useSelector(
        state => models.game.selectors.filterBy(state, {})
    );
        
    console.log("GAMES", games);
    return (
        <GamesOverview {...props} items={games}/>
    );
};

export default GamesOverviewContainer;