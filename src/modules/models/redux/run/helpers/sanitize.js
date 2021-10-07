const sanitize = (payload = []) =>
    payload.reduce((acc, {
        id,
        game,
        videos,
        players,
        times
    }) => [
        ...acc,
        ...[{
            id,
            game,
            videos: [...(videos?.links || []).map(({ uri }) => uri)],
            users: [...(players || []).map(({ id }) => id)],
            time: times.primary_t
        }]
    ], []);

export default sanitize;