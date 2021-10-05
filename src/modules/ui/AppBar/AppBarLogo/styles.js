import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(unusedTheme => ({
    root: {
        width: "fit-content"
    },
    avatar: {
        '&&': {
            height: 32,
            width: 32
        },
        marginRight: 10,
    },
    listItemText: {
        textTransform: 'uppercase'
    }
}));

export default useStyles;