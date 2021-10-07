import * as React from 'react';

import useGameQuery from '../hooks/useGameQuery';
import useGameRunsQuery from '../hooks/useGameRunsQuery';
import GameOverviewPage from '../components/GameOverviewPage';
import GameOverviewHeader from '../../../../components/GameOverviewHeader';
import RunTable from '../../../../../run/containers/RunTable';
import RunGameCard from '../../../../../run/containers/RunGameCard';

const GameOverviewRoute = (props) => {
    const { match } = props;
    const { gameId } = match.params;
   
    useGameQuery({ gameId });
    useGameRunsQuery({ gameId });

    return (
        <GameOverviewPage
            heading={<GameOverviewHeader />}
            overview={<RunGameCard gameId={gameId}/>}
            table={<RunTable gameId={gameId}/>}
        />
    )
};

export default GameOverviewRoute;