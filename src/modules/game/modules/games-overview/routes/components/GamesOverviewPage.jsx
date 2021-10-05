import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

import Page from '../../../../../ui/Page';

const useStyles = makeStyles(unusedTheme => ({
    root: {}
}));
  

const GamesOverviewPage = ({
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
                spacing={4}
            >
                <Grid item xs={12}>
                    {heading}
                </Grid>
                <Grid item xs={12}>
                    {contents}
                </Grid>
            </Grid>
        </Page>
    )
};

export default GamesOverviewPage;