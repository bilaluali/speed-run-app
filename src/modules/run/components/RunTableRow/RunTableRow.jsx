import * as React from 'react';
import { TableRow, TableCell, IconButton } from '@material-ui/core';
import VideoIcon from '@mui/icons-material/OndemandVideoTwoTone';
import classnames from 'classnames';

import useStyles from './styles';

const RunTableRow = ({
    className,
    row,
    ...props
}) => {
    const classes = useStyles();

    const RowCell = cell => (
        <TableCell
            className={classes.cell}
            align="justify"
        >
            {cell}
        </TableCell>
    );
    return (
        <TableRow
            {...props}
            className={classnames(className, classes.root)}
        >
            {RowCell(row.name)}
            {RowCell(row.time)}
            {RowCell(
                <IconButton
                    aria-label="video"
                    color="error"
                    href={row.video}
                >
                    <VideoIcon />
                </IconButton>
            )}
        </TableRow>
    )
};

export default RunTableRow;