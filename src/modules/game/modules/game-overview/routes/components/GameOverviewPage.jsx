import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

import Page from '../../../../../ui/Page';

const useStyles = makeStyles(unusedTheme => ({
    root: {}
}));
  

const GameOverviewPage = ({
    className,
    heading,
    contents,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Page
            {...props}
            className={classnames(className, classes.root)}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={2}>
                    Hello World
                </Grid>
                <Grid item xs={8}>
                    {contents}
                </Grid>
            </Grid>
        </Page>
    )
};

export default GameOverviewPage;