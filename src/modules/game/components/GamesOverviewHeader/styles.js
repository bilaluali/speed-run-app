import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiListItemText-primary': {},
        '& .MuiListItemText-secondary': {
            color: `${theme.palette.default.main} !important`,
            opacity: 0.7
        }
    },
}));

export default useStyles;