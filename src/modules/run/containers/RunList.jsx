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
        })
    );

    const userId = runs[0]?.users[0];

    const user = useSelector(
        state => userId &&
            models.user.selectors.filterBy(state, {
                id: userId 
            })[0]
    );

    const items = React.useMemo(() => runs[0] && user
        ? [{
            id: runs[0].id,
            primary: user.name,
            secondary: runs[0].time,
            video: runs[0].videos[0]
        }]
        : [],
        [runs, user]
    );
        
    return (
        <RunList {...props} items={items}/>
    );
};

export default RunListContainer;