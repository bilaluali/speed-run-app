import * as React from 'react';
import { useSelector } from 'react-redux';

import GameCard from '../../game/components/GameCard';
import * as models from '../../models/redux';


const RunGameCard = ({
    gameId,
    ...props
}) => {
    const game = useSelector(
        state => models.game.selectors.filterBy(state, { 
            id: gameId 
        })[0]
    );
        
    return (
        <GameCard
            {...props}
            primary={game?.name}
            image={game?.image}
        />
    );
};

export default RunGameCard;