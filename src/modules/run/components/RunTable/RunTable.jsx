import * as React from 'react';
import { Table, TableBody } from '@material-ui/core';
import classnames from 'classnames';

import RunTableRow from '../RunTableRow';
import RunTableHead from '../RunTableHead';
import useStyles from './styles';

const RunTable = ({
    className,
    rows,
    ...props
}) => {
    const classes = useStyles();

    return (
        <Table
            {...props}
            className={classnames(className, classes.root)}
            aria-label="Runs Table"
        >
            <RunTableHead />
            <TableBody className={classes.body}>
                {rows.map(row => (
                    <RunTableRow
                        key={row.id}
                        row={row} />
                ))}
            </TableBody>
        </Table>
    )
};

export default RunTable;