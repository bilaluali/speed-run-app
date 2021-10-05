import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

import AppBar from '../AppBar';


const useStyles = makeStyles(theme => ({
    root: {},
    bodyContent: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8)
    },
}));
  
const Page = ({
    className,
    children,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Container
            {...props}
            className={classnames(className, classes.root)}
        >
            <Grid
                container
                direction="column"
                wrap="nowrap"
                alignContent="flex-start"
                className={classes.wrapper}
            >
                <AppBar />
                <Grid item className={classes.bodyContent}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    )
};

export default Page;