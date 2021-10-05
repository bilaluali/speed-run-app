import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(unusedTheme => ({
    root: {
        display: 'inline-block',
        position: 'relative',
        margin: 0,
    },
    img: {
        display: 'block',
        width: '100%',
        height: 'auto'
    },
    circularProgress: {
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        width: '30px !important',
        height: '30px !important',
    }
}));

export default useStyles;