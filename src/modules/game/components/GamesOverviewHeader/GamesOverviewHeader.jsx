import * as React from 'react';
import {  ListItemText } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const GamesOverviewHeader = ({
    className,
    primary,
    secondary,
    ...props
}) => {
    const classes = useStyles();
    return (
        <ListItemText
            {...props}
            className={classnames(className, classes.root)}
            primary={primary}
            secondary={secondary}
            primaryTypographyProps={
                React.useMemo(() => ({ variant: 'h4' }), [])
            }
            secondaryTypographyProps={
                React.useMemo(() => ({ variant: 'body1' }), [])
            }
        />
    )
};

export default GamesOverviewHeader;