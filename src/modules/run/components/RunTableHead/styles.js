import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {},
    row: {},
    cell: {
        color: `${theme.palette.success.main} !important`,
        borderBottom: '1px solid rgb(255 255 255 / 10%) !important',
        textTransform: 'capitalize',
    },
}));

export default useStyles;