import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(unusedTheme => ({
    root: {
        width: "fit-content"
    },
    avatar: {
        '&&': {
            height: 24,
            width: 24
        },
        marginRight: 10,
    },
    listItemText: {
        textTransform: 'uppercase'
    }
}));

export default useStyles;