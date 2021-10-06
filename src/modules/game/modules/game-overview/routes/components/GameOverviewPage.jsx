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
    overview,
    table,
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
                spacing={10}
            >
                <Grid
                    item
                    xs={12}
                    md={3}
                >
                    {overview}
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={9}
                >
                    {table}
                </Grid>
            </Grid>
        </Page>
    )
};

export default GameOverviewPage;