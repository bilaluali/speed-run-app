import * as React from 'react';
import { ListItem, ListItemText, IconButton } from '@material-ui/core';
import VideoIcon from '@mui/icons-material/OndemandVideo';
import classnames from 'classnames';

import useStyles from './styles';

const RunListItem = ({
    className,
    primary,
    secondary,
    video,
    ...props
}) => {
    const classes = useStyles();
    return (
        <ListItem
            {...props}
            className={classnames(className, classes.root)}
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="video"
                    href={video}
                >
                    <VideoIcon />
                </IconButton>
            }
            divider
        >
            <ListItemText
                className={classes.listItemText}
                primary={primary}
                secondary={secondary}
                primaryTypographyProps={
                    React.useMemo(() => ({ variant: 'body1' }), [])
                }
                secondaryTypographyProps={
                    React.useMemo(() => ({ variant: 'body1' }), [])
                }
            />
        </ListItem>
    )
};

export default RunListItem;