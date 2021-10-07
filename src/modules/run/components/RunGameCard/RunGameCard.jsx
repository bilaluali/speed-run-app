import * as React from 'react';
import classnames from 'classnames';

import GameCard from '../../../game/components/GameCard';
import useStyles from './styles';

const RunGameCard = ({
    className,
    primary,
    image,
    ...props
}) => {
    const classes = useStyles();
    return (
        <GameCard
            {...props}
            className={classnames(className, classes.root)}
            primary={primary}
            image={image}
        />
    )
};

export default RunGameCard;