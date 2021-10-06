import * as React from 'react';
import { List } from '@material-ui/core';
import classnames from 'classnames';

import RunListItem from '../RunListItem';
import useStyles from './styles';

const RunList = ({
    className,
    items,
    ...props
}) => {
    const classes = useStyles();
    return (
        <List
            {...props}
            className={classnames(className, classes.root)}
        >
            {items.map( ({ id, ...item }) => (
                <RunListItem
                    key={id}
                    {...item}
                />
            ))}
        </List>
    )
};

export default RunList;