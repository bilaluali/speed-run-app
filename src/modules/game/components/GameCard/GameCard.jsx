import * as React from 'react';
import { Card, CardContent } from '@material-ui/core';
import classnames from 'classnames';

import GameCardImage from '../GameCardImage';
import GameCardInfo from '../GameCardInfo';
import useStyles from './styles';


const GameCard = ({
    className,
    primary,
    image,
    path,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Card
            {...props}
            className={classnames(className, classes.root)}
        >
            <GameCardImage
                className={classes.cardImage}
                image={image}
            />
            <CardContent
                className={classes.cardContent}
            >
                <GameCardInfo
                    className={classes.gameCardInfo}
                    primary={primary}
                    path={path}
                />
            </CardContent>
        </Card>
    )
};

export default GameCard;