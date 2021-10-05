import * as React from 'react';

import GameCard from '../components/GameCard';


const GameCardContainer = ({
    name,
    image,
    ...props
}) => {
    return (
        <GameCard
            {...props}
            primary={name}
            image={image}
        />
    );
};

export default GameCardContainer;