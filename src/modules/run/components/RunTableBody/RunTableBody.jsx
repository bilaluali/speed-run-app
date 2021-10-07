import * as React from 'react';
import { TableBody } from '@material-ui/core';
import classnames from 'classnames';

import RunTableRow from '../RunTableRow';
import useStyles from './styles';

const RunTableBody = ({
    className,
    rows,
    ...props
}) => {
    const classes = useStyles();
    return (
        <TableBody
            {...props}
            className={classnames(className, classes.body)}
        >
            {rows.map(row => (
                <RunTableRow
                    key={row.id}
                    row={row} />
            ))}
        </TableBody>
    )
};

export default RunTableBody;