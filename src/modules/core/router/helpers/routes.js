import GamesOverviewRoute from '../../../game/modules/games-overview/routes/containers/GamesOverviewRoute';
import GameOverviewRoute from '../../../game/modules/game-overview/routes/containers/GameOverviewRoute';

const routes = [
    { path: '/games', component: GamesOverviewRoute },
    { path: '/games/:gameId', component: GameOverviewRoute },
]

export default routes;