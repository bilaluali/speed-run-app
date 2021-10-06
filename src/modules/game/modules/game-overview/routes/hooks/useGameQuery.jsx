import * as React from 'react';
import { useDispatch } from 'react-redux';

import { API_PATH } from '../../../../../api/config';
import * as models from '../../../../../models/redux';

export default function useGameQuery({
    gameId
}) {

    const dispatch = useDispatch();

    // NOTE: I just kept the side-effects simple, without using
    // a redux side effect manager. App state was also kept with
    // a simple architecture.
    React.useEffect(() => {
        fetch(`${API_PATH}/games/${gameId}`)
            .then(response => {
                if (response.ok)
                    return response.json()
                throw response
            })
            .then(res => {
                dispatch(
                    models.game.actionsCreators.addEntities([res.data])
                );
            })
            .catch(error => {
                console.log("ERR_FETCH: Cannot fetch data");
            })
    }, [gameId, dispatch]);

};