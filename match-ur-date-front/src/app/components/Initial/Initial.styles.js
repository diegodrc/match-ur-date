import theme from '../Theme';

export default {
    main: {
        background: theme.palette.primary.main,
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        justifyContent: 'center',
        display: 'flex'
    },
    outer: {
        display: 'flex',
        maxWidth: 'fit-content',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        maxWidth: 'fit-content',
        display: 'block',
        width: 'auto'
    },
    // info: {
        
    // },
    options: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    buttons: {
        background: theme.palette.primary.button,
        color: theme.typography.color,
        width: 'auto',
        justifyContent: 'space-evenly',
        textTransform: 'none',
        fontWeight: 'bold',
        border: '1px solid #000',
        borderRadius: '12px'
    }
};
