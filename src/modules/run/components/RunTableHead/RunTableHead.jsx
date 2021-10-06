import * as React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const RunTableHead = ({
    className,
    ...props
}) => {
    const classes = useStyles();

    const HeadCell = cell => (
        <TableCell
            className={classes.cell}
            align="justify"
        >
            {cell}
        </TableCell>
    );

    return (
        <TableHead
            {...props}
            className={classnames(className, classes.root)}
        >
            <TableRow>
                {HeadCell("Username")}
                {HeadCell("Time")}
                {HeadCell("Video")}
            </TableRow>
        </TableHead>
    )
};

export default RunTableHead;