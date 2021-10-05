import * as React from 'react';

import useGamesQuery from '../hooks/useGamesQuery';
import GamesOverviewPage from '../components/GamesOverviewPage';
import GamesOverview from '../../../../containers/GamesOverview';
import GamesOverviewHeader from '../../../../containers/GamesOverviewHeader';
  
const GamesOverviewRoute = (props) => {

    useGamesQuery();

    return (
        <GamesOverviewPage
            heading={<GamesOverviewHeader />}
            contents={<GamesOverview />}
        />
    )
};

export default GamesOverviewRoute;
