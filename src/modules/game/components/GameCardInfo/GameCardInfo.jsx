import * as React from 'react';
import {  ListItemText } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const GameCardInfo = ({
    className,
    primary,
    ...props
}) => {
    const classes = useStyles();
    return (
        <ListItemText
            {...props}
            className={classnames(className, classes.root)}
            primary={primary}
            primaryTypographyProps={
                React.useMemo(() => ({ variant: 'body1' }), [])
            }
        />
    )
};

export default GameCardInfo;