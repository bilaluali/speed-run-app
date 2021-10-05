import * as React from 'react';
import { Avatar, ListItemButton, ListItemText } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

  const AppBarLogo = ({
    className,
    ...props
}) => {
    const classes = useStyles();
    return (
        <ListItemButton
            {...props}
            className={classnames(className, classes.root)}
        >
            <Avatar
                className={classes.avatar}
                variant="square"
                alt="SpeedrunIcon"
                src={process.env.PUBLIC_URL + "/logo192.png"}
            />
            <ListItemText
                className={classes.listItemText}
                primary={process.env.REACT_APP_NAME}
                primaryTypographyProps={React.useMemo(() => ({ variant: 'h6' }), [])}
            />
        </ListItemButton>
    )
};

export default AppBarLogo;