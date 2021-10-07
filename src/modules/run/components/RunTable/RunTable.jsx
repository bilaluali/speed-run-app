import * as React from 'react';
import { Table } from '@material-ui/core';
import classnames from 'classnames';

import RunTableHead from '../RunTableHead';
import RunTableBody from '../RunTableBody';
import useStyles from './styles';

const RunTable = ({
    className,
    columns,
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
            <RunTableHead
                className={classes.head}
                columns={columns}
            />
            <RunTableBody
                className={classes.body}
                rows={rows}
            />
        </Table>
    )
};

export default RunTable;