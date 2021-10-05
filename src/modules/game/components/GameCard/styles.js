import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'transparent !important',
        boxShadow: '0px 3px 5px 0px rgb(0 0 0 / 7%) !important',
        '&:hover': {
            border: `2px solid ${theme.palette.success.main}`,
        },
        '& .MuiCardContent-root': {
            padding: [[16, 16, 8, 16]],
        },
        '& .MuiCardActions-root': {
            padding: [[0, 16, 16, 16]]
        }
    },
    cardImage: {
        margin: 0
    },
    cardContent: {},
    gameCardInfo: {
        margin: '0px !important'
    }
}));

export default useStyles;