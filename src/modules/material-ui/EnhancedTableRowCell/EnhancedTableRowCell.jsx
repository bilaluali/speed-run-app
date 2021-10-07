import * as React from 'react';
import { TableCell } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const EnhancedTableRowCell = ({
    className,
    children,
    ...props
}) => {
    const classes = useStyles();

    // NOTE: Just keept it simple for now, extensible
    // in the future.

    return (
        <TableCell
            {...props}
            className={classnames(className, classes.root)}
        >
            {children}
        </TableCell>
    )
};

export default EnhancedTableRowCell;