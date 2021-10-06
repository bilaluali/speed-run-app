import * as React from 'react';
import { useSelector } from 'react-redux';

import RunList from '../components/RunList';
import * as models from '../../models/redux';


const RunListContainer = ({
    gameId,
    ...props
}) => {
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

    const items = React.useMemo(() =>
        runs.map(run => ({
            primary: user.name,
            secondary: run.time,
            video: run.videos[0]
        })), 
        [runs, user]
    );
        
    return (
        <RunList {...props} items={items}/>
    );
};

export default RunListContainer;