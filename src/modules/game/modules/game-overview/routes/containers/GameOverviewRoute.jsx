import * as React from 'react';
import { useSelector } from 'react-redux';

import useGameQuery from '../hooks/useGameQuery';
import useGameRunsQuery from '../hooks/useGameRunsQuery';
import useUserQuery from '../../../../../user/modules/user-overview/routes/hooks/useUserQuery';
import GameOverviewPage from '../components/GameOverviewPage';
import RunList from '../../../../../run/containers/RunList';
import * as models from '../../../../../models/redux';

const GameOverviewRoute = (props) => {
    const { match } = props;
    const { gameId } = match.params;

    const runs = useSelector(
        state => models.run.selectors.filterBy(state, { 
            game: gameId
        })[0]
    );
    const user = useSelector(
        state => models.user.selectors.filterBy(state, { 
            id: runs.users[0].id
        })
    );

    useGameQuery({ gameId });
    useGameRunsQuery({ gameId });
    useUserQuery({ userId: user.id });

    return (
        <GameOverviewPage
            contents={<RunList />}
        />
    )
};

export default GameOverviewRoute;
