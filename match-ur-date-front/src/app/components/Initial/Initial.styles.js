import theme from '../Theme';

const styles = {
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
    info: {
        fontFamily: theme.typography.fontFamily,
        padding: '50px 0px',
        fontSize: '14px'
    },
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
        borderRadius: '8px',
        fontFamily: theme.typography.fontFamily
    }
};

export default styles;
