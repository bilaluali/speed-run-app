import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(unusedTheme => ({
    root: {
        display: 'inline-block',
        position: 'relative'
    },
    img: {
        display: 'block',
        width: '100%',
        height: 'auto'
    },
    chip: {
        position: 'absolute',
        left: '5%',
        top: '5%'
    }
}));

export default useStyles;