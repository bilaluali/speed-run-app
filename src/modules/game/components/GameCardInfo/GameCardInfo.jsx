import * as React from 'react';
import {  ListItemText, Link } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const GameCardInfo = ({
    className,
    primary,
    path,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Link
            {...props}
            className={classnames(className, classes.root)}
            {...path
                ? { href: path, underline: 'hover' }
                : { underline: 'none' }
            }
        >
            <ListItemText
                
                primary={primary}
                primaryTypographyProps={
                    React.useMemo(() => ({ variant: 'body2' }), [])
                }
            />
        </Link>
    )
};

export default GameCardInfo;