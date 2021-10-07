import * as React from 'react';
import { IconButton } from '@material-ui/core';
import VideoIcon from '@mui/icons-material/OndemandVideoTwoTone';
import classnames from 'classnames';

import EnhancedTableRowCell from '../../../material-ui/EnhancedTableRowCell';
import useStyles from './styles';

const RunTableVideoRowCell = ({
    className,
    video,
    ...props
}) => {
    const classes = useStyles();
    return (
        <EnhancedTableRowCell
            {...props}
            className={classnames(className, classes.root)}
        >
            <IconButton
                aria-label="video"
                color="error"
                href={video}
            >
                <VideoIcon />
            </IconButton>
        </EnhancedTableRowCell>
    )
};

export default RunTableVideoRowCell;