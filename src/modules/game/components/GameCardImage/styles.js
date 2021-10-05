import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => {
    console.log('THEEEMEE', theme);
    return{
    root: {
        width: '100%',
        display: 'inline-block',
        position: 'relative'
    },
    img: {
        display: 'block',
        width: '100%',
        height: '10vw',
        objectFit: 'contain',
        [theme.breakpoints.only('lg')]: {
            height: '10vw',
        },
        [theme.breakpoints.only('md')]: {
            height: '20vw',
        },
        [theme.breakpoints.only('sm')]: {
            height: '24vw',
        },
        [theme.breakpoints.only('xs')]: {
            height: '30vw',
        } 
    },
    chip: {
        position: 'absolute',
        left: '5%',
        top: '5%'
    }
}});

export default useStyles;