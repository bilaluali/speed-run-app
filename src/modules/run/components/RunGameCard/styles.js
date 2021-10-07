import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '&:hover': {
            border: 'none'
        },
    },
}));

export default useStyles;