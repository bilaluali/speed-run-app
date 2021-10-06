import * as React from 'react';

import GameCard from '../components/GameCard';


const GameCardContainer = ({
    id,
    name,
    image,
    ...props
}) => {
    const gamePath = `/games/${id}`;
    return (
        <GameCard
            {...props}
            primary={name}
            image={image}
            path={gamePath}
        />
    );
};

export default GameCardContainer;