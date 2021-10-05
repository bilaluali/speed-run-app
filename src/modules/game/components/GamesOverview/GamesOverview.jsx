import * as React from 'react';
import {  Grid } from '@material-ui/core';
import classnames from 'classnames';

import GameCard from '../../containers/GameCard';
import useStyles from './styles';

const GamesOverview = ({
    className,
    items,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Grid
            {...props}
            className={classnames(className, classes.root)}
            spacing={5}
            container
        >
            {items.map(item => 
                <Grid
                    item
                    key={item.id}
                    xs={12}
                    sm={4}
                    md={3}
                    lg={2}
                >
                    <GameCard {...item}/>
                </Grid>
            )}
        </Grid>
    )
};

export default GamesOverview;