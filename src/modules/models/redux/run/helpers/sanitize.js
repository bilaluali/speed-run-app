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
            videos: [...videos.map(({ links }) => links.uri)],
            users: [...players.map(({ id }) => id)],
            time: times.primary_t
        }]
    ], []);

export default sanitize;