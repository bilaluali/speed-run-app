import * as React from 'react';

import useGamesQuery from '../hooks/useGamesQuery';
import GamesOverviewPage from '../components/GamesOverviewPage';
import GamesOverview from '../../../../containers/GamesOverview';
  
const GamesOverviewRoute = (props) => {

    useGamesQuery();

    return (
        <GamesOverviewPage
            contents={<GamesOverview />}
        />
    )
};

export default GamesOverviewRoute;
