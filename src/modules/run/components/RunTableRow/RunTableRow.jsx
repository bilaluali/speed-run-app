import * as React from 'react';
import { TableRow } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const RunTableRow = ({
    className,
    row,
    ...props
}) => {
    const classes = useStyles();

    return (
        <TableRow
            {...props}
            className={classnames(className, classes.root)}
        >
            {row.map(({
                RowCell,
                RowCellProps 
            }) => (
                <RowCell
                    key={RowCellProps.id}
                    {...RowCellProps}
                    className={classes.cell}
                    align="justify"
                />
            ))}
        </TableRow>
    )
};

export default RunTableRow;