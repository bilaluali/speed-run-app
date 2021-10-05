import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

import Page from '../../ui/Page';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiGrid-root': {
            alignSelf: 'center',
            paddingTop: 36
        }
    },
    text: {}
}));
  
const PageNotFound = ({
    className,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Page
            {...props}
            className={classnames(className, classes.root)}
        >
            <Typography
                className={classes.text}
                variant="h1"
            >
                404
            </Typography>
        </Page>
    )
};

export default PageNotFound;