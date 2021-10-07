import * as React from 'react';
import { useSelector } from 'react-redux';

import RunGameCard from '../components/RunGameCard';
import * as models from '../../models/redux';


const RunGameCardContainer = ({
    gameId,
    ...props
}) => {
    const game = useSelector(
        state => models.game.selectors.filterBy(state, { 
            id: gameId 
        })[0]
    );
        
    return (
        <RunGameCard
            {...props}
            primary={game?.name}
            image={game?.image}
        />
    );
};

export default RunGameCardContainer;