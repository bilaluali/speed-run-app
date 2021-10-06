import * as React from 'react';
import { useSelector } from 'react-redux';

import RunTable from '../components/RunTable';
import * as models from '../../models/redux';


const RunTableContainer = ({
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

    const rows = React.useMemo(() => runs[0] && user
        ? [{
            id: runs[0].id,
            name: user.name,
            time: runs[0].time,
            video: runs[0].videos[0]
        }]
        : [],
        [runs, user]
    );
        
    return (
        <RunTable {...props} rows={rows}/>
    );
};

export default RunTableContainer;