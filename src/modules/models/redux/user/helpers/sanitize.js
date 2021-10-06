const sanitize = (payload = []) => 
    payload.reduce((acc, {
        id,
        names
    }) => [
        ...acc,
        ...[{
            id,
            name: names.international
        }]
    ], []);

export default sanitize;