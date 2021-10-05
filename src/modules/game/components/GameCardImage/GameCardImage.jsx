import * as React from 'react';
import classnames from 'classnames';

import GameCardImageLoader from '../GameCardImageLoader';
import useStyles from './styles';

const DEFAULT_IMG = `${process.env.PUBLIC_URL}/placeholder.png`;
  
const GameCardImage = ({
    className,
    image,
    ...props
}) => {
    const classes = useStyles();

    const [loading, setLoading] = React.useState(true);

    // TRICKY SOLUTION: Need to be improved
    const handleRendered = React.useCallback(
        () => setLoading(false),
        []
    );
    const handleRender = React.useCallback(
        () => requestAnimationFrame(handleRendered),
        [handleRendered]
    );
    const handleLoad = React.useCallback(
        () => requestAnimationFrame(handleRender),
        [handleRender]
    );

    return (
        <figure
            {...props}
            className={classnames(className, classes.root)}
        >
            {!!loading && 
                <GameCardImageLoader />
            }
            <img
                className={classes.img}
                alt="Game"
                src={image || DEFAULT_IMG}
                onLoad={() => {
                    handleLoad();
                }}
            />
        </figure>
    )
};

export default GameCardImage;