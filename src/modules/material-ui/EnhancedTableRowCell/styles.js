import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        color: `${theme.palette.default.main} !important`,
        borderBottom: '1px solid rgb(255 255 255 / 10%) !important',
    },
}));

export default useStyles;