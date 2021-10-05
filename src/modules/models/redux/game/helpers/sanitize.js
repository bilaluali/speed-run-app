const sanitize = (payload = []) =>
    payload.reduce((acc, {
        id,
        names,
        assets
    }) => [
        ...acc,
        ...[{
            id,
            name: names.international,
            image: assets['cover-large'].uri,
        }]
    ], []);

export default sanitize;