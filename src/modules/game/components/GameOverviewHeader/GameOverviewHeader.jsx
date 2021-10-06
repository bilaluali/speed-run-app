import * as React from 'react';
import {  Typography } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const GameOverviewHeader = ({
    className,
    primary,
    secondary,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Typography
            {...props}
            className={classnames(className, classes.root)}
            variant="h4"
        >
            Game detail
        </Typography>
    )
};

export default GameOverviewHeader;