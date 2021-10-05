import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiListItemText-primary': {
            color: `${theme.palette.success.main} !important`
        }
    }
}));

export default useStyles;