import GamesOverviewRoute from '../../../game/modules/games-overview/routes/containers/GamesOverviewRoute';

const routes = [
    { path: '/games', component: GamesOverviewRoute },
    { path: '/games/:id', component: null },
]

export default routes;