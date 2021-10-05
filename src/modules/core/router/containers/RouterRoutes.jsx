import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../components/Routes';
import routes from '../helpers/routes';

const RouterRoutes = ({
    ...props
}) => {
    // TO-DO: Improve this attribute
    const location = window.location;
    return (
        <Router>
            <Routes {...props} location={location} routes={routes}/>
        </Router>
    )
};

export default RouterRoutes;

