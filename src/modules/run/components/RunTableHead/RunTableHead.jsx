import * as React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const RunTableHead = ({
    className,
    columns,
    ...props
}) => {
    const classes = useStyles();
    return (
        <TableHead
            {...props}
            className={classnames(className, classes.root)}
        >
            <TableRow
                className={classes.row}
            >
                {columns.map(col => (
                    <TableCell
                        key={col}
                        className={classes.cell}
                        align="justify"
                    >
                        {col}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
};

export default RunTableHead;